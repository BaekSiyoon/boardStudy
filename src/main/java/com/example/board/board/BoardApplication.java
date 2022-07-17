package com.example.board.board;

import javax.annotation.Resource;
import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

@SpringBootApplication
public class BoardApplication {

	public static void main(String[] args) {
		System.out.println("Main");
		SpringApplication.run(BoardApplication.class, args);
	}

	// application 실행 파일에 @bean으로 등록 후 mybatis-config.xml 사용
	@Bean
	public SqlSessionFactory sqlSessionFactory(DataSource dataSource) throws Exception {
		final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
		sessionFactory.setDataSource(dataSource);
		Resource configLocation = (Resource) new PathMatchingResourcePatternResolver()
				.getResource("classpath:mybatis-config.xml");

		sessionFactory.setConfigLocation((org.springframework.core.io.Resource) configLocation);
		return sessionFactory.getObject();
	}

}
