import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Kushal</GradientText> 👋
        </>
      }
      description={
        <>
          Sophomore studying computer science at
          <GradientText> The University of Michigan</GradientText>{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/headshot.JPG"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/kushal-patel-a3a113252/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/kushal5294/">
            <HeroSocial src="/assets/images/github.png" alt="Github icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
