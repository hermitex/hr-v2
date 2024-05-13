# Talanta HR Sysetem Documentation

2023

(Version: 0.2.0)

## TalantaHR System Overview

### Introduction

Welcome to the TalantaHR System, version 0.2.0 – where modern technologies converge to streamline and enhance HR operations. This system is a react (Next.js-powered) web application, utilizing a robust stack of dependencies to ensure efficiency, maintainability, and a delightful user experience.

### Key Dependencies

1. Runtime Dependencies

- @emotion/react (version 11.1.1): Library for styling react components with emotion.
- @emotion/styled(version 11.11.0): Emotion bindings for writing styled components with CSS
- @mui/icons-material(version 5.14.9): Material UI icons
- @mui/material(version 5.14.9): React components implimenting Google’s material design.
- @reduxjs/toolkit(version 1.9.5): Toolkit for effective Redux development.
- @types/node(version 20.6.0): Typescript types for Node.js
- @types/react(version 18.2.21): TypeScript types for React
- @types/react-dom(version 18.2.7): Typescript for ReactDOM
- @typescript-eslint/scope-manager(version 6.7.0): Typescript ESLint scope manager
- cross-env: (version 7.0.3): Cross-platform setting for environment scripts
- formik(version 2.4.4): Form Library for react and react netive
- next(version 13.5.4): React framework for building server-rendered applications.
- react(version 18.2.0): React Library.
- react-dom(version 18.2.0): React DOM Library
- react-redux(version 8.1.2): Official react bindings for redux
- react-router-dom(version 6.16.0): Declaring routing for react.js
- react-toastify(version 9.1.3): Notification Library for react
- typescript(version 5.2.2): Typed superset for Javascript
- yup(version 1.2.0): Javascript schema builder for value parsing and validation.

2. Development Dependencies

- @typescript-eslint/eslint-pligin(version 6.7.0): Typescript ESLint plugin.
- eslint(version 8.49.0): Linting utility for javascript and JSX
- eslint-config-next(version 13.4.9): ESLint configurationfor Next.js projects.
- eslint-config-prettier(version 9.0.0): Turns off ESLint rules that conflict with Prettier
- husky(version 8.0.0): Git hooks made easy
- prettier(version 3.0.3): Optimated code formatter

## Getting Started

```bash
npm install
npm run dev
```

## Module Documentation

1. Organization Authentication

- API endpoint

```bash
  https://api/talantahrm.com/organization/{organization}/v1/validate
```

- Injection Points: everytime on focus. (on every page)- creates a hook for this and import to every page

- Wrong/ non-existant organization navigates you to the 404 page
  NB: if you are logged in it logs you out and redirects you to the error page

- Upon success navigate to login page if user isnt logged in

2. User Authentication

- Login UI

-Login API intergration
Endpoint:

```bash
https://api/talantahrm.com/oauth/v1/generate
```

error loggin in:

Success loggin in redirects to dash:
NB: DESIGN STILL IN PROGRESS....
# hr-v2
