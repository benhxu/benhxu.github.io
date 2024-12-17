const produceSpans = (text: string, animation: string) => {
    return text.split('').map((letter, index) => (
      <span
        key={index}
        className={`inline-block transform-style-3d origin-bottom ${animation}`}
        style={{ animationDelay: `${index * 0.03}s` }}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };
  
  const About = () => {
    return (
      <section
        id="about"
        className="flex items-center justify-start bg-primary text-secondary dark:bg-secondary dark:text-primary pt-20 relative"
      >
        <div className="absolute top-20 left-10 max-w-4xl space-y-6">
          {/* Enlarged h1 */}
          <h1 className="text-6xl font-extrabold">Hi, I'm Ben Xu</h1>
  
          {/* Smooth Animated Text */}
          <div className="animated-text-container">
            <div className="text first" aria-label="Life Time Learner">
              {produceSpans('Life Time Learner', 'animate-textSmooth')}
            </div>
            <div className="text second" aria-label="Wear Different Hats">
              {produceSpans('Wear Different Hats', 'animate-textSmooth')}
            </div>
          </div>
  
          {/* Enlarged Paragraphs */}
          <p className="text-xl">
            One of my passions is to use technology to improve the quality of life for others. <br />
            Specializing in web development, data visualization, and analytics, and creating engaging user experiences.
          </p>
          <p className="text-xl">Let's build something amazing together.</p>
        </div>
      </section>
    );
  };
  
  export default About;