import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="NFL Spread Model"
        description="Machine learning model that predicts the score differential of future NFL matches. Finished +23 units during the 2023-2024 NFL season against the DraftKings sportsbook."
        link="https://www.wolverinesportsanalytics.com/projects/nfl-game-predictor/"
        img={{
          src: '/assets/images/football.png',
          alt: 'football',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Machine Learning</Tags>
            <Tags color={ColorTags.LIME}>Pandas</Tags>
            <Tags color={ColorTags.SKY}>TensorFlow</Tags>
            <Tags color={ColorTags.NEUTRAL}>Python</Tags>
          </>
        }
      />
      <Project
        name="Auto-captioning tool"
        description="Automatically generates alt text for images in Wordpress. Regeneration feature that takes user specified suggestions to improve alt text."
        link="/"
        img={{
          src: '/assets/images/accessibility.png',
          alt: 'accessibility icon',
        }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>PHP</Tags>
            <Tags color={ColorTags.TEAL}>JavaScript</Tags>
            <Tags color={ColorTags.ROSE}>OpenAI</Tags>
            <Tags color={ColorTags.FUCHSIA}>Accessibility</Tags>
            <Tags color={ColorTags.SKY}>Wordpress</Tags>
          </>
        }
      />
      <Project
        name="March Madness Bracket Predictor"
        description="Machine learning model that simulated the outcome of the 2023 March Madness bracket. Finished in the 84th percentile on ESPN's Tournament Challenge."
        link="https://www.wolverinesportsanalytics.com/projects/march-madness/"
        img={{ src: '/assets/images/basketball.png', alt: 'basketball' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>TensorFlow</Tags>
            <Tags color={ColorTags.STONE}>Beautiful Soup</Tags>
            <Tags color={ColorTags.TEAL}>Machine Learning</Tags>
          </>
        }
      />
      <Project
        name="Insta485"
        description="Client side dynamix project that emulates the functionality of Instagram. User-friendly interface that uses React framework that makes AJAX calls to our REST API. Leveraged a Flask application within a Python virtual environment to manage backend operations, including website data, user sessions, and cookies."
        link="/"
        img={{ src: '/assets/images/instagram.png', alt: 'instagram logo' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React</Tags>
            <Tags color={ColorTags.INDIGO}>Flask</Tags>
            <Tags color={ColorTags.ROSE}>Web Dev</Tags>
            <Tags color={ColorTags.EMERALD}>Rest API</Tags>
            <Tags color={ColorTags.ZINC}>SQLite</Tags>
            <Tags color={ColorTags.AMBER}>Client Side</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
