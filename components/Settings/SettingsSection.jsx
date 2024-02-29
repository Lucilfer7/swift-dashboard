import Section from "./Section";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";

const SettingsSection = ({ title, description, children }) => (
  <Section>
    <div>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
    </div>
    {children}
  </Section>
);

export default SettingsSection;
