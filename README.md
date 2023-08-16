# 📄 Resume Builder
<p align="center">
  <a title="license" href="./LICENSE"><img src="https://img.shields.io/github/license/TheCoderRaman/resume-builder" alt="license"></a>
  <a title="react" href="https://react.dev"><img src="https://img.shields.io/badge/logo-react-blue?logo=react" alt="react"></a>
  <a title="mui" href="https://mui.com"><img src="https://img.shields.io/badge/logo-mui-blue?logo=mui" alt="mui"></a>
  <a title="tailwindcss" href="https://tailwindcss.com"><img src="https://img.shields.io/badge/logo-tailwindcss-blue?logo=tailwindcss" alt="tailwindcss"></a>
  <a title="netlify-status" href="https://app.netlify.com/sites/dev-resume-builder/deploys"><img src="https://img.shields.io/netlify/a42e7109-f1bc-4928-8d16-023f229e9316" alt="netlify-status"></a>
</p>

<p align="center">
  <img width="200" height="200" src="./public/logo512.png?raw=true" alt="logo" />
</p>

## 👷 About
Introducing **Resume Builder**, the ultimate React application that empowers you to craft eye-catching resumes like never before.
You can easily customize your resume with Resume Builder's user-friendly interface to highlight your unique skills and professional experience.

Stand out from the crowd and make a lasting impression with Resume Builder, the perfect tool to land your dream job. 🤩
**Just select template - Fill in the details and voila! Your resume is ready to preview and download.**
###### 🏗 Start building your future today!

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./public/assets/images/logos/logo-dark.png?raw=true">
      <img alt="Resume Builder" src="./public/assets/images/logos/logo-light.png?raw=true">
  </picture>
</p>

## Major Technologies
- mui
- jspdf
- react
- redux
- tailwindcss
- react-hook-form
- react-router-dom
## Structure

```sh
├───Components
│   ├───Header
│   ├───Icons
│   ├───Layouts
│   ├───Locales
│   ├───Logos
│   └───Themes
│       └───Styles
├───Data
│   ├───actions
│   ├───forms
│   ├───locales
│   ├───paginations
│   ├───templates
│   └───Web
├───Hooks
│   └───Mui
├───Modules
├───Pages
│   ├───AboutUs
│   │   └───Components
│   │       └───Sharer
│   ├───Error
│   ├───FillDetails
│   │   └───Components
│   │       ├───Buttons
│   │       ├───Dialogs
│   │       ├───Footer
│   │       ├───Forms
│   │       ├───Sidebars
│   │       ├───Styles
│   │       └───Tabs
│   ├───GeneratedResume
│   │   └───Components
│   │       ├───Cards
│   │       └───Errors
│   ├───Home
│   │   └───Components
│   │       └───Cards
│   └───MyResume
│       └───Components
│           ├───Cards
│           └───Errors
├───Providers
├───Redux
│   ├───features
│   │   ├───forms
│   │   ├───settings
│   │   └───templates
│   └───stores
├───Router
├───Templates
│   ├───TemplateFive
│   │   ├───Components
│   │   │   ├───Left
│   │   │   ├───Right
│   │   │   ├───Steps
│   │   │   └───Top
│   │   └───Data
│   ├───TemplateFour
│   │   ├───Components
│   │   │   ├───Left
│   │   │   ├───Right
│   │   │   └───Steps
│   │   └───Data
│   ├───TemplateOne
│   │   ├───Components
│   │   │   ├───Bottom
│   │   │   ├───Layouts
│   │   │   ├───Steps
│   │   │   └───Top
│   │   └───Data
│   ├───TemplateThree
│   │   ├───Components
│   │   │   ├───Left
│   │   │   ├───Right
│   │   │   └───Steps
│   │   └───Data
│   ├───TemplateTwo
│   │   ├───Components
│   │   │   ├───Bottom
│   │   │   ├───Layouts
│   │   │   ├───Steps
│   │   │   └───Top
│   │   └───Data
│   ├───TemplateZero
│   └───Utils
└───Utils
```
## Getting Started 🎉

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
##### 💡Prerequisites
We recommend that you have a basic understanding of Node.js
###### Installation
```bash
# Clone the repository
$ git clone https://github.com/TheCoderRaman/ResumeBuilder.git
$ cd ResumeBuilder
```
###### Production
```bash
# Build for production
$ npm install
$ npm run build
```
###### Development
```bash
# Run the development server
$ npm install
$ npm start dev
```
## Repository Branches
- **master** -> any pull request of changes this branch
- **main** -> don´t modify, this is what is running in production
## Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.
###### Pull Requests
1. Fork the repo and create your branch:
   `#[type]/PR description`
1. Ensure to describe your pull request:
   Edit the PR title by adding a semantic prefix like `Added`, `Updated:`, `Fixed:` etc.
   **Title:**
   `#[issue] PR title -> #90 Fixed styles the button`
## Authors
* [Raman Verma](https://github.com/TheCoderRaman)

## Code of Conduct
In order to ensure that the Resume Builder community is welcoming to all, please review and abide by the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Security Vulnerabilities
If you discover a security vulnerability within resume builder, please send an e-mail to Raman Verma via [e-mail](mailto:devramanverma@gmail.com).
All security vulnerabilities will be promptly addressed.

## License
The Resume Builder is open-sourced software licensed under the [MIT License](./LICENSE)