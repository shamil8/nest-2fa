# nest-two-fa
A submodule for integrating twoFA functionality within a NestJS application.

### Prerequisites
Ensure the following libraries are installed in your NestJS project:

1. `otplib`
2. `qrcode`

### Installation
To add the necessary dependencies, run:
```yarn
yarn add otplib qrcode
```

### Uninstallation:
To remove these dependencies, run:
```yarn
yarn remove otplib qrcode
```

### Environment Variables
Configure your twoFA module by setting the following environment variables:
```dotenv
# TwoFA module environments
TWO_FA_APP_NAME=somename
```
