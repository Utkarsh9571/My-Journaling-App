# My Simple Journaling App 

This is a simple app for journaling you day-to-day notes, this is build with react-native and expo for creating entries and viewing them.

## Table of contents

- [My process](#my-process)
  - [Technologies Used](#technologies-used)
  - [Features](#features)
  - [Usability Heuristics (Nielsen's 10 Heuristics)](#usability-heuristics-nielsens-10-heuristics)
  - [How to Run the App Locally](#How-to-Run-the-App-Locally)
  - [Build Instructions & Assessment Notes](#Build-Instructions-&-Assessment-Notes)
- [Author](#author)

## My process

### Technolofies Used

- React Native: The primary framework for building native mobile applications using JavaScript.

- Expo: The development platform for React Native, building, running and deploying apps.

- Expo Router: For file-system based routing and efficient navigation within the application.

- TypeScript: For type safety, enhancing code quality and maintainability.

- React Navigation: For handling the tab-based navigation structure.

### Features

- Add New Entries
- View All Entries
- Date Stamping
- Simple Navigation

### Usability Heuristics (Nielsen's 10 Heuristics)

As you said i tried to implement Neilsen's 10 Heuristics, some of them are:

- Visibility of System Status
- Error Prevention
- Consistency and Standards
- Aesthetic and Minimalist Design

### How to Run the App Locally

To set up and run this project on your device, please follow these steps:

1. Clone the Repository:

    git clone [my-journaling-app]
    cd my-journal-app

2. Install Dependencies:

    (npm install)

  - Ensure you have npm installed.

3. Start the Expo Development Server:

    (npm start)

  - This will start the Metro bundler and open a new browser tab with the Expo Dev Tools.

4. Run on a Device/Emulator:

  - Using Expo Go App: Scan the QR code displayed in the terminal.
  - Android Emulator: Press (a) in the terminal or click "Run on Android device/emulator" in the Expo Dev Tools.
  - Web Browser: Press (w) in the terminal or click "Run in web browser".

### Build Instructions & Assessment Notes

This application has been configured to build using Expo Application Services (EAS).

- TypeScript Usage: The entire application is developed using TypeScript, fulfilling your requiements and code quality.

- iOS Build Attempt (Assessment Requirement Note):
  As per the assessment requirement, i tried to build the application for iOS using EAS Build. The process was successfully initiated but, the build could not be fully completed because i need an Apple Developer Account (a paid service) for code signing.

  - The application functions perfectly on Android devices and in web browsers, demonstrating core functionality and styling on those platforms.
  however, i also could not complete the build for android beacause of server issues on 5th june at 11pm (i completed it around that time) so in order to submit it, i had to submit it as it is. 

## Author

- Utkarsh Sharma