---
title: 'Handle, Don\'t Throw'
description: '.'
---

7th June 2023

# Handle, Don't Throw

A rule that has served me well when building applications is to "handle, don't throw" when dealing with exceptions. It's a mindset I try to instill in others when mentoring or working alongside them.

To provide some context, I believe we should catch and handle exceptions rather than throwing errors inside application code. However, it's worth noting that I think it's acceptable to throw exceptions in shared library code. The library doesn't have the same context as the caller, so in certain cases, it may be expected for the caller to retry or handle the exception according to the library's expectations. The calling application doesn't necessarily need to throw or rethrow the exception.

## Why Not Throw?

There are several reasons why I choose not to throw exceptions:

1. **Historically, thrown errors slow the application** - Although languages now have better reflection capabilities to capture stack traces, thrown errors still have performance implications, albeit reduced ones compared to the past.
2. **Thrown errors are difficult to hide from any User Interface** - Whether it's a desktop application or a web-facing API, exception messages often find their way to user-facing layers. Or, in a slightly worse scenario, you're using a framework that obfuscates the error so that it is meaningless to the caller, and to the person debugging the problem - e.g the user has an HTTP 500 error, but it's so meaningless that we can only correlate by IP and time of the incident.
3. **Thrown errors defer problem-solving** - Throwing an exception is akin to saying, "I don't know" when it comes to addressing the root cause of an issue. Eventually, someone will have to add logic to handle or remove the error, which simply defers the work.
4. **Thrown errors introduce side-effects** - Throwing errors can change the execution behavior of an application. While you may be confident that the error will be handled at a higher level, as the application expands, the execution behavior becomes more relied upon, making the logic more brittle. This concept is often summarized by [Hyrums Law](https://www.hyrumslaw.com/):

> With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviors of your system will be depended on by somebody...

## Alternative approaches

When encountering exceptions, I prefer to handle them and aim to choose an approach that maintains the handling function as a [pure-function](https://en.wikipedia.org/wiki/Pure_function). However, it's not always clear how to implement this or deal with situations where throwing the exception feels like the only choice. Here are some alternative approaches to consider:

1. **Give your return types more context** - Alter the return type of the method so that it is capable of expressing more detail about the operation, if needed, and whether some part of it failed. It may be tempting to return primitive or value types, but even pure-functions can return complex objects with descriptive properties that can be used by the caller.
2. **Return null** - While not the most imaginative resolution, most functions should be able to represent the absence of a value/result instead of using a `void` method. Keep in mind that there won't be explicit reasoning for why the returned value is null, which may be acceptable if you have proper logging and instrumentation in place. This approach keeps things simple. Plus, this strategy keeps it simple.
3. **Use a Result object** - Rust has a nice way of handling success/failure scenarios with the [Result](https://doc.rust-lang.org/std/result/) type, which can have a near-equivalent implementation in C#, or TypeScript. Here's an example using TypeScript:
```typescript
export type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };
```
4. **Pass an optional parameter** - You can pass an optional parameter by reference (or in TypeScript, any object like `{}`) to capture error information. Personally, I find this approach makes call signatures a bit messy and can lead to issues with parameter ordering.
5. **Trigger an event** - In an event-driven system, you can pass error details to another component using an event. However, this assumes that the method can complete its execution without the context from the error, or that the method might wait for an event-driven response. I only recommend this approach for in-memory queuing mechanisms (e.g., local to the process, with little or no serialization over TCP).
6. **Pass a callback function** - This is a fairly common pattern in functional languages. However, be cautious of the potential pitfalls of callback hell, where the code becomes difficult to read and reason about. This approach can also make call signatures more convoluted.
7. **Use Promises** - In TypeScript (and C#), it's easy to fall into the async/await pattern and overlook the fact that you can manually construct Promisified return types that leverage language primitives without the complexity of passing a callback function.

There are many other possible alternative solutions depending on the language and tooling available to you, such as using a `goto` statement or status codes.

