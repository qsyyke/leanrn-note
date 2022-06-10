---
date: 2022/3/23
---

# 报错信息整理



## java.lang.IllegalArgumentException: Param 'serviceName' is illegal, serviceName is blank



## openFeign的fallback不生效

需要加上一个依赖和一个配置

```yml
feign:
  circuitbreaker:
    enabled: true
```

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-circuitbreaker-resilience4j</artifactId>
</dependency>	
```



