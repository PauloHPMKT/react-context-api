<h1>Base concept about Context API</h1>
</hr>

- The context API was introduced into React JS version 16 as a way to share data through a components tree without needing to pass down props at every level. The main ideia under the table for context API is treating data props as "global" but not large or complex enaugh for a dedicated state manager like Redux, for example,
  such as the user's current language current theme, or even data for multi-steps forms before they being sent to an API.
- React Context allows you to share and manage state across your components without passing down props. The context will provide the data to just the components that need to consume it.
