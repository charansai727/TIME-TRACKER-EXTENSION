# TIME-TRACKER-EXTENSION

*COMPANY* : CODTECH IT SOLUTIONS

*NAME* : GRANDHE CHARAN SAI

*INTERN ID* : CT06DL451

*DOMAIN* : FULL STACK WEB DEVELOPMENT

*DURATION* : 6 WEEKS

*MENTOR* : NEELA SANTOSH

*PROJECT OVERVIEW* 

 The project focuses on developing a Chrome browser extension designed to track and visualize the time users spend on various websites. This extension helps users monitor their online activity by collecting data on visited websites and the duration of time spent on each, then presenting this information in an intuitive and interactive manner. The goal is to enable users to better understand and manage their browsing habits, promote productivity, and identify time sinks.

Key Features and Functionality:

Real-Time Website Tracking:
The extension continuously monitors the active tab in the Chrome browser to identify the currently visited website’s domain. It records the total time spent on each website by aggregating user sessions, ensuring accurate measurement of browsing duration.

Data Aggregation and Storage:
Time spent data is stored locally within the extension’s background scripts, maintaining persistence across browsing sessions. This data structure efficiently keeps track of all visited domains and their corresponding accumulated times.

Visual Representation Using Bar Charts:
To present the data effectively, the extension integrates Chart.js, a powerful JavaScript charting library, enabling graphical visualization of website usage. A bar chart displays the comparative time spent on each website, giving users a quick overview of their browsing behavior.

User Interface via Popup Window:
The extension provides an accessible and user-friendly popup interface accessible from the browser toolbar icon. This popup displays the bar chart and a list of tracked websites with their respective time metrics, allowing users to interactively explore their browsing data.

Multiple Website Tracking & Session Management:
The extension is designed to track multiple websites simultaneously without losing historical data as the user switches tabs or visits new sites. It ensures continuity of data even when users close or reopen the browser.

Local Resource Usage to Bypass Content Security Policy (CSP):
To comply with Chrome’s security policies and avoid CSP issues, the extension loads Chart.js and other libraries locally rather than from external CDNs. This approach improves security, performance, and reliability.

Technologies Used:

JavaScript: Core programming language used for background scripts, content scripts, and popup logic.

Chrome Extension APIs: Used for tab monitoring, storage, and UI interaction.

Chart.js: For rendering dynamic and visually appealing bar charts.

HTML/CSS: To build the popup user interface with a clean and responsive design.

Challenges and Solutions:

Ensuring accurate time tracking required careful handling of browser tab focus changes and idling.

Overcoming Chrome's CSP restrictions involved downloading and bundling external libraries locally.

Managing persistent data efficiently to prevent loss during browser restarts.

Designing a clear and concise UI to present complex data simply.

Future Enhancements:

Adding weekly or monthly summaries and trends for long-term analysis.

Classifying websites as productive or unproductive to give more insights.

Adding notifications or alerts to remind users when spending excessive time on certain sites.

Incorporating user customization options such as excluding specific sites or time thresholds.

This project demonstrates proficiency in browser extension development, real-time data tracking, data visualization, and user-centered design principles. It combines front-end and background scripting techniques to deliver a functional and insightful productivity tool for users.

*OUTPUT* 

