plugins {
    `java-platform`
}

javaPlatform {
    allowDependencies()
}

dependencies {
    api(platform("org.springframework.boot:spring-boot-dependencies:2.6.7"))

    constraints {
        api("org.apache.httpcomponents:fluent-hc:4.5.10")
        api("org.apache.httpcomponents:httpclient:4.5.10")
        runtime("commons-logging:commons-logging:1.2")
        api("com.graphql-java:graphql-java:18.1")
        api("org.springframework.boot:spring-boot-starter-data-rest:2.7.0")
        api("javax.persistence:javax.persistence-api:2.2")

    }
}
