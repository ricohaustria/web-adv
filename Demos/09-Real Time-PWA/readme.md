# Progressive Web Apps and Real Time Apps

## Demo

---

### .NET 6 Skills Api

- Requires [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0).
- If you want to use another db engine change connection string in appsettings.json.

Go to folder where `*.csproj` is located, open console and run:

`dotnet restore` and then  
`dotnet run`

For device testing it might be helpful to enable remote access - by default the .Net Core API is only available using `http://localhost:PORT/` and is not listening to the ip of your dev machine.

`dotnet run --urls http://0.0.0.0:5000` or
`dotnet run --urls https://0.0.0.0:5001`

---

### Progressive Web Apps

[Progressive Web Apps @Google](https://web.dev/progressive-web-apps/)

[Angular Service Workers](https://angular.io/guide/service-worker-intro)

[How to make PWAs installable](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs)

[Debugging Service Workers](https://developers.google.com/web/tools/workbox/guides/troubleshoot-and-debug)

Setup, Base Scaffolding & Getting started:

Allow use of self signed localhost certificates on Chrome or Edge:

```
chrome://flags/#allow-insecure-localhost
edge://flags/#allow-insecure-localhost
```

#### Create Project with Service Worker

```
ng new skills-pwa
cd skills-pwa
ng add @angular/pwa --project skills-pwa
```

Make sure you adjust your `environment.prod` to match IP config of your dev machine

```
export const environment = {
  production: true,
  api: 'https://localhost:5001/api/',
};
```

#### Create a build

```
ng build --prod [--delete-output-path false]
```

> Note: Make sure your envirenment.prod.ts matches environment.ts

#### Serving Build

To serve the build you need an http-server. Use `angular-http-server` or `http-server`

```
npm install -g angular-http-server
ng build
cd .\dist\skills-pwa\
angular-http-server
```

#### Use https://127.0.0.1:8080

[ngrok](https://ngrok.com/) is a tool that provides an `https-secured tunnel` to `localhost` that enables
testing your PWAs. Requires registration but is free.

```
ngrok.exe http 8080
```

![ngrok](_images/ngrok.png)

---

### Real Time Apps - SignalR

[SignalR](https://docs.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr)

[Azure SignalR Service Documentation](https://docs.microsoft.com/en-us/azure/azure-signalr/)

[@microsoft/signalr](https://www.npmjs.com/package/@microsoft/signalr)