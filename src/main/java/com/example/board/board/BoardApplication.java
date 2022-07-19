package com.example.board.board;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.tomcat.util.file.ConfigurationSource.Resource;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;


@SpringBootApplication
public class BoardApplication {

	public static void main(String[] args) {
		System.out.println("Main");
		SpringApplication.run(BoardApplication.class, args);
	}

}
