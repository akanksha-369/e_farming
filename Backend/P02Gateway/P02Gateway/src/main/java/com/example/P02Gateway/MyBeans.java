package com.example.P02Gateway;

import java.util.Arrays;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

@Configuration
public class MyBeans {

	@Bean
	public RouteLocator customRouterLocator(RouteLocatorBuilder builder) {
		return builder.routes().route("EFARMING", r -> r.path("/authentication/**").uri("lb://EFARMING"))
				.route("PRODUCTRESTSERVICES", r -> r.path("/products/**").uri("lb://PRODUCTRESTSERVICES"))
				.route("P02ORDERADD", r -> r.path("/api/**").uri("lb://P02ORDERADD")).build();
	}

	@Bean
	public CorsWebFilter corsWebFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();

		config.setAllowCredentials(true);
		config.addAllowedOrigin("http://localhost:3002"); // Use addAllowedOrigin (no duplicates)
		config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
		config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
		config.setExposedHeaders(Arrays.asList("Authorization"));

//		source.registerCorsConfiguration("/**", config); // Apply CORS to all routes
		// Apply CORS to specific paths to avoid conflicts
		source.registerCorsConfiguration("/authentication/**", config);
		source.registerCorsConfiguration("/products/**", config);
		source.registerCorsConfiguration("/api/**", config);
		return new CorsWebFilter(source);
	}

}