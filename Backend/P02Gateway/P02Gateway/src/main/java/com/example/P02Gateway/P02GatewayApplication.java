package com.example.P02Gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class P02GatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(P02GatewayApplication.class, args);
	}

}
