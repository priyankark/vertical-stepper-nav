# vertical-stepper-nav
A simple to use vertical stepper component for your React projects!

NPM package link:  https://www.npmjs.com/package/vertical-stepper-nav

Use the example from [CodeSandbox](https://codesandbox.io/s/recursing-morse-3h7oo?file=/src/App.tsx)

**Screenshot:**

<img src="https://snipboard.io/VEYnBt.jpg" alt="Upload and share screenshots and images - print screen online | Snipboard.io" style="zoom:50%;" />

#### Usage Instructions

Use the example from [CodeSandbox](https://codesandbox.io/s/recursing-morse-3h7oo?file=/src/App.tsx)

This package exposes 3 components:

* **StepperNav:** This takes a single prop called steps. Steps is an array which will take following elements:
  * stepContent: A JSX Element which needs to be shown next to the circle
  * stepStatusCircleSize: size of the circle to show in that step
  * stepStateColor: color of the circle 
  * onClickHandler: a callback that needs to be called when a user clicks on this step. This is optional.
* **Step and Separator: ** These components are internally used by StepperNav component and if you wish to build your own stepper, you can use these components.

#### Support

For more support, please feel free to raise an issue and we shall be glad to assist you. We are working on adding more features.

