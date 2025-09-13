import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Section, Row, Column } from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  interest?: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ 
  name, 
  email, 
  subject, 
  message, 
  phone,
  interest 
}) => {
  return (
    <Html>
      <Head />
      <Preview>Nouveau message de contact - Jesosy Mamonjy Iarintsena</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* En-tête de l'église */}
          <Section style={header}>
            <Row>
              <Column>
                <Text style={churchName}>Jesosy Mamonjy Iarintsena</Text>
                <Text style={churchSubtitle}>Église - Communauté Chrétienne</Text>
              </Column>
            </Row>
          </Section>

          {/* Contenu du message */}
          <Section style={content}>
            <Heading style={h1}>Nouveau message de contact</Heading>
            
            <Text style={introText}>
              Vous avez reçu un nouveau message via le formulaire de contact de votre site web.
            </Text>

            <Section style={detailsBox}>
              <Text style={label}>Sujet:</Text>
              <Text style={value}>{subject}</Text>
              
              <Text style={label}>Nom:</Text>
              <Text style={value}>{name}</Text>
              
              <Text style={label}>Email:</Text>
              <Text style={value}>{email}</Text>
              
              {phone && (
                <>
                  <Text style={label}>Téléphone:</Text>
                  <Text style={value}>{phone}</Text>
                </>
              )}
              
              {interest && (
                <>
                  <Text style={label}>Intérêt:</Text>
                  <Text style={value}>{interest}</Text>
                </>
              )}
            </Section>

            <Text style={label}>Message:</Text>
            <Section style={messageBox}>
              <Text style={messageText}>{message}</Text>
            </Section>
          </Section>

          {/* Pied de page */}
          <Section style={footer}>
            <Text style={footerText}>
              Jesosy Mamonjy Iarintsena • Iarintsena, Madagascar
            </Text>
            <Text style={footerText}>
              Email: contact@jesosymamonjy-iarintsena.mg • Téléphone: +261 34 12 345 67
            </Text>
            <Text style={footerNote}>
              Message envoyé le {new Date().toLocaleDateString('fr-FR')} à {new Date().toLocaleTimeString('fr-FR')}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f7f7f7',
  fontFamily: '"Open Sans", sans-serif',
  padding: '20px 0',
};

const container = {
  backgroundColor: '#ffffff',
  border: '1px solid #eaeaea',
  borderRadius: '8px',
  margin: '0 auto',
  padding: '0',
  width: '100%',
  maxWidth: '600px',
};

const header = {
  backgroundColor: '#4c7a34',
  color: '#ffffff',
  padding: '20px',
  textAlign: 'center' as const,
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
};

const churchName = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
};

const churchSubtitle = {
  fontSize: '14px',
  margin: '5px 0 0 0',
  opacity: 0.9,
};

const content = {
  padding: '30px',
};

const h1 = {
  color: '#4c7a34',
  fontSize: '22px',
  margin: '0 0 20px 0',
};

const introText = {
  fontSize: '16px',
  lineHeight: '1.5',
  margin: '0 0 20px 0',
};

const detailsBox = {
  backgroundColor: '#f8f9fa',
  borderLeft: '4px solid #4c7a34',
  padding: '15px',
  margin: '0 0 20px 0',
};

const label = {
  color: '#4c7a34',
  fontWeight: 'bold',
  margin: '10px 0 5px 0',
};

const value = {
  margin: '0 0 15px 0',
};

const messageBox = {
  backgroundColor: '#f8f9fa',
  border: '1px solid #eaeaea',
  borderRadius: '4px',
  padding: '15px',
  margin: '10px 0 20px 0',
};

const messageText = {
  lineHeight: '1.6',
  margin: '0',
};

const footer = {
  backgroundColor: '#2c3e50',
  color: '#ffffff',
  padding: '20px',
  textAlign: 'center' as const,
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
};

const footerText = {
  fontSize: '12px',
  margin: '5px 0',
  opacity: 0.8,
};

const footerNote = {
  fontSize: '11px',
  margin: '10px 0 0 0',
  opacity: 0.6,
};

export default EmailTemplate;