import * as React from 'react';
import { Html, Head, Preview, Body, Container, Heading, Text, Section } from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  visitDate: string;
  message: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ 
  name, 
  email, 
  phone, 
  visitDate, 
  message 
}) => {
  // Formater la date en français
  const formattedDate = new Date(visitDate).toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Html>
      <Head />
      <Preview>Nouvelle demande de visite du chantier - Jesosy Mamonjy Iarintsena</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* En-tête */}
          <Section style={header}>
            <Text style={churchName}>Jesosy Mamonjy Iarintsena</Text>
            <Text style={churchSubtitle}>Demande de visite du chantier</Text>
          </Section>

          {/* Contenu */}
          <Section style={content}>
            <Heading style={h1}>Nouvelle demande de visite</Heading>
            
            <Text style={introText}>
              Une nouvelle demande de visite du chantier a été soumise via le site web.
            </Text>

            <Section style={detailsContainer}>
              <Text style={label}>Nom complet:</Text>
              <Text style={value}>{name}</Text>
              
              <Text style={label}>Email:</Text>
              <Text style={value}>{email}</Text>
              
              <Text style={label}>Téléphone:</Text>
              <Text style={value}>{phone}</Text>
              
              <Text style={label}>Date souhaitée:</Text>
              <Text style={value}>{formattedDate}</Text>
              
            </Section>

            <Text style={label}>Message supplémentaire:</Text>
            <Section style={messageBox}>
              <Text style={messageText}>
                {message || "Aucun message supplémentaire fourni."}
              </Text>
            </Section>

            <Section style={instructions}>
              <Text style={instructionsTitle}>Instructions importantes:</Text>
              <Text style={instructionsText}>
                • Merci de confirmer cette visite par téléphone dans les 48h
                • Rappeler les consignes de sécurité à respecter sur le chantier
                • Prévoir des équipements de sécurité si nécessaire
              </Text>
            </Section>
          </Section>

          {/* Pied de page */}
          <Section style={footer}>
            <Text style={footerText}>
              Jesosy Mamonjy Iarintsena • Iarintsena, Madagascar
            </Text>
            <Text style={footerText}>
              Téléphone: +261 34 12 345 67 • Email: contact@jesosymamonjy-iarintsena.mg
            </Text>
            <Text style={footerNote}>
              Demande reçue le {new Date().toLocaleDateString('fr-FR')} à {new Date().toLocaleTimeString('fr-FR')}
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
  padding: '25px',
  textAlign: 'center' as const,
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
};

const churchName = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 5px 0',
};

const churchSubtitle = {
  fontSize: '16px',
  margin: '0',
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
  margin: '0 0 25px 0',
};

const detailsContainer = {
  backgroundColor: '#f8f9fa',
  borderLeft: '4px solid #4c7a34',
  padding: '20px',
  margin: '0 0 25px 0',
};

const label = {
  color: '#4c7a34',
  fontWeight: 'bold',
  margin: '12px 0 5px 0',
  fontSize: '14px',
};

const value = {
  margin: '0 0 15px 0',
  fontSize: '16px',
};

const messageBox = {
  backgroundColor: '#f8f9fa',
  border: '1px solid #eaeaea',
  borderRadius: '4px',
  padding: '15px',
  margin: '10px 0 25px 0',
};

const messageText = {
  lineHeight: '1.6',
  margin: '0',
  fontStyle: 'italic',
};

const instructions = {
  backgroundColor: '#e8f4fc',
  border: '1px solid #bee5eb',
  borderRadius: '4px',
  padding: '15px',
  margin: '20px 0',
};

const instructionsTitle = {
  color: '#0c5460',
  fontWeight: 'bold',
  margin: '0 0 10px 0',
};

const instructionsText = {
  color: '#0c5460',
  margin: '0',
  lineHeight: '1.5',
  fontSize: '14px',
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