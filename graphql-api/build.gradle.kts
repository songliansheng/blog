plugins {
    `java-library`
    id("demo.java-application-conventions")
}

repositories {
    mavenCentral()
}

dependencies {
    api(platform(project(":java-platform-bom")))
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.8.2")
    testImplementation("org.junit.jupiter:junit-jupiter-engine:5.8.2")
    implementation("com.graphql-java:graphql-java")
}
tasks{
    test {
        useJUnitPlatform()
    }
}
