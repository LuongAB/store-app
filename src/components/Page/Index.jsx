import React from "react";
import { Layout } from "antd";
import Head from "../Layout/Head";
import Main from "../Layout/Main";
import Foot from "../Layout/Foot";

const { Header, Content, Footer } = Layout;

const Index = () => {
	return (
		<Layout>
			<Header style={{ position: "sticky", top: "0", zIndex: "2" }}>
				<Head />
			</Header>
			<Content>
				<Main />
			</Content>
			<Footer>
				<Foot />
			</Footer>
		</Layout>
	);
};

export default Index;
