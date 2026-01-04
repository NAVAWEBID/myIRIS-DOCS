import {
    Body,
    Container,
    Head,
    Html,
    Row,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';
import { container, footer, logo, main } from '../css/styles';

interface MailBodyProps {
  children: React.ReactNode;
}

export function MailBody({ children }: MailBodyProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <MailHeader />
        <Container style={container}>{children}</Container>
        <MailFooter />
      </Body>
    </Html>
  );
}

export function MailHeader() {
  return (
    <Section style={logo}>
      {/* <Heading style={h1}>docmost</Heading> */}
    </Section>
  );
}

export function MailFooter() {
  return (
    <Section style={footer}>
      <Row>
        <Text style={{ textAlign: 'center', color: '#706a7b' }}>
          {new Date().getFullYear()} myIRIS Docs, open-source collaborative wiki and documentation <br />
        </Text>
      </Row>
    </Section>
  );
}
