# Kubernetes

[Kubernetes Base Terms](https://docs.bytemark.co.uk/article/kubernetes-terminology-glossary/)

[Kubectl Commands](https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands)

Enable Kubernetes in Docker Desktop:

- Go to Docker Desktop Settings
- Check Enable Kubernetes -> Press Yes to install if asked

![Kubernetes](_images/kubernetes.png)

### Getting Started

Create a Deployment:

```
kubectl apply -f skillsui.yaml
```

Expose using a Service:

```
kubectl expose deployment skillsui --type=LoadBalancer --port=8080
```

Forward the port to Service

![port-forward](_images/port-forward.png)

> Note: Can also be done using: `kubectl port-forward pods/skillsui-5656cfd5b8-gc2m9 8060:80 -n default`

Cleanup:

```
kubectl delete service skillsui
kubectl delete deployment skillsui
```

> Note: Just in case you want to host on a classic Webserver (ie. IIS) you would have to configure URL Rewrite for Angular Subroutes

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <rewrite>
            <rules>
                <rule name="SPA" stopProcessing="true">
                    <match url=".*" />
                    <conditions logicalGrouping="MatchAll">
                    <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                    <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="./index.html" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
```
