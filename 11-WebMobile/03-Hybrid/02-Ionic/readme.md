# Ionic

[Ionic Documentation](https://ionicframework.com/docs/)

[CLI Documentation](https://ionicframework.com/docs/cli/)

[Ionic Introduction](https://ionicthemes.com/tutorials/about/building-a-complete-mobile-app-with-ionic-3)

## Ionic Setup

### Install Ionic

```
npm install -g cordova ionic
```

### Create a Ionic Project

```
ionic start smartSammler
```

### Add Plattform manually

```
ionic cordova platform add browser | ios | android
```

# Getting started with Ionic

### Adding Items

Items are added using [ionic generate](https://ionicframework.com/docs/cli/generate/)

```
ionic generate page PAGE_NAME
```

### Running

```
ionic serve
ionic cordova emulate browser | ios | android
```

'ionic serve' is a shortcut form 'ionic cordova emulate browser'

### Building & Deployment to device

Using Manual Deployment

```
ionic cordova build  browser | ios | android
adb install -r platforms\android\app\build\outputs\apk\debug\app-debug.apk
```

Using Ionic Dev App

- Login to Ionic Dev App
- Run

```
ionic serve -c
```

Using Pro Account

ionic login

# Editors & Debugging

[VS Code](https://code.visualstudio.com/)

Install [XCode](https://developer.apple.com/xcode/) and | or [Android Studio](https://developer.android.com/studio/)

Download [Ionic Dev App](https://ionicframework.com/docs/pro/devapp/) to your device for easy debugging

# Device Access

[Ionic Native](https://ionicframework.com/docs/native/)

[Capacitor](https://capacitor.ionicframework.com/)
