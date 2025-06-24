import React from 'react'

const FeatureShowcase: React.FC = () => {
  const features = [
  {
    "id": 1,
    "title": "APP CONTEXT: You are building \"CalmConnect\" - CalmConnect is a relationship app designed to facilitate healthy communication between partners by providing real-time conflict resolution tools. It offers guided conversations and prompts to help couples navigate disagreements in a constructive manner, fostering understanding and empathy. Key Features: Real-time communication prompts, Guided conflict resolution exercises, Mood tracking, Personalized relationship insights. \n\nKEY DETAILS:\n- Target Users: consumers\n- Main Goal: fullapp  \n- Core Features: Real-time communication prompts, Guided conflict resolution exercises, Mood tracking, Personalized relationship insights\n\nThis context applies to all development tasks. Keep the app's purpose and users in mind for every component you build.\n\nCreate a homepage with a welcoming message and a 'Start Conversation' button.",
    "description": "This feature was implemented based on your requirements."
  },
  {
    "id": 2,
    "title": "Design a mood tracking section with emoji selections for users to express their feelings.",
    "description": "This feature was implemented based on your requirements."
  },
  {
    "id": 3,
    "title": "Add a guided conflict resolution section with step-by-step prompts.",
    "description": "This feature was implemented based on your requirements."
  },
  {
    "id": 4,
    "title": "Include a 'Personal Insights' page displaying relationship statistics and trends.",
    "description": "This feature was implemented based on your requirements."
  }
];

  return (
    <div className="feature-showcase">
      <h2>✨ Implemented Features</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureShowcase
