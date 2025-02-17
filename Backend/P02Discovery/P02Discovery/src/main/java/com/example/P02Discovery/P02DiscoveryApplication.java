package com.example.P02Discovery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class P02DiscoveryApplication {

	public static void main(String[] args) {
		SpringApplication.run(P02DiscoveryApplication.class, args);
	}

}
