const app = require("./stuffThatYouCanIgnore");
const fs = require('fs');
const path = require('path');

const STYLE = `
  <style>
    /* General styling */
    * {
        font-family: Arial, sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
      body {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f4f4f4;
        height: 100vh;
      }
      main {
        max-width: 70ch;
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      h1, h3 {
        padding-bottom: 20px;
      }

      p,  a {
        padding-bottom: 15px;
      }

      /* Header styling */
      h1 {
        color: #333;
        font-size: 2em;
        margin-bottom: 20px;
      }

      ol {
        padding-left: 20px;
      }

      /* Button styling */
      button {
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1em;
      }

      button:hover {
        background-color: #0056b3;
      }

      .choices {
        margin-top: 20px;
      }
      .choice {
        margin-bottom: 10px;
      }
  </style>`;

const filePath = path.join(__dirname, 'gratitude_journal_entries.json');

const affirmations_for_happier_life = [
  { "typeOfAffirmation": "Self-Love", "textOfAffirmation": "I am worthy of love and joy." },
  { "typeOfAffirmation": "Confidence", "textOfAffirmation": "I am in control of my thoughts, emotions, and actions." },
  { "typeOfAffirmation": "Optimism", "textOfAffirmation": "I attract positive energy and good things come my way." },
  { "typeOfAffirmation": "Growth", "textOfAffirmation": "Challenges are opportunities for growth and improvement." },
  { "typeOfAffirmation": "Gratitude", "textOfAffirmation": "I am grateful for the people and experiences that have shaped me." },
  { "typeOfAffirmation": "Self-Care", "textOfAffirmation": "I choose to be happy and love myself today." },
  { "typeOfAffirmation": "Resilience", "textOfAffirmation": "I am resilient, strong, and brave." },
  { "typeOfAffirmation": "Success", "textOfAffirmation": "I believe in myself and my ability to succeed." },
  { "typeOfAffirmation": "Relationships", "textOfAffirmation": "I am deserving of meaningful and loving relationships." },
  { "typeOfAffirmation": "Mindfulness", "textOfAffirmation": "I am present, and not worried about the future or the past." }
];

app.get('/', (req, res) => {
  res.send(`
    ${STYLE}
    <body>
      <main>
        <h1>Story of Little Node.js Developers</h1>
        <button onclick="startStory()">Start the Story</button>
      </main>

      <script>
        function startStory() {
          window.location.href = '/story';
        }
      </script>
    </body>
  `);
});

app.get('/story', (req, res) => {
  res.send(`
    ${STYLE}
    <body>
      <main>
        <p>Once upon a time, there were little Node.js developers named <strong>Alice, Bob, and Carol</strong>.
        They lived in a small, cozy co-working space filled with bean bags, whiteboards, and
        an endless supply of coffee. Despite the comfort, they were restless. They knew they
        were on the verge of creating something that could make people happier but weren't
        sure what it should be.</p>
        <br>
        <p>One fine day, they gathered around their communal table, each with a steaming cup of coffee.
        "We need to decide today," said Alice, looking determined.</p>
        <br>
        <p>Bob nodded, "I agree, we've been brainstorming for weeks. It's time to start building."</p>
        <br>
        <p>Carol, always the dreamer among them, stared out of the window at the bustling city.
        "Imagine an app that could somehow capture the essence of happiness and share it with the world."</p>
        <br>
        <p>Suddenly, the room was filled with a sense of purpose. They knew they had found their mission:
        to build an app that would make people happier, an app that could possibly change the world.</p>
        <br>
        <p><b>Choice 1:</b>
        Alice suggests they build a "Gratitude Journal" app, where users can write down things they're thankful for each day.</p>
        <br>
        <p><b>Choice 2:</b>
        Bob thinks they should create a "Mood Tracker" app, which tracks users' emotional states and provides tips to improve their mood.</p>
        <br>
        <p><b>Choice 3:</b>
        Carol proposes a "Random Acts of Kindness" app, encouraging users to commit small acts of kindness and share their stories.
        </p>
        <div class="choices">
          <button class="choice" onclick="updateStory('alice')">Choice 1: Gratitude Journal</button>
          <button class="choice" onclick="updateStory('bob')">Choice 2: Mood Tracker</button>
          <button class="choice" onclick="updateStory('carol')">Choice 3: Random Acts of Kindness</button>
        </div>
      </main>
      <script>
        function updateStory(choice) {
          if (choice === 'alice') {
            window.location.href = '/journal';
          } else if (choice === 'bob') {
            window.location.href = '/tracker';
          } else if (choice === 'carol') {
            window.location.href = '/random-acts';
          }
        }
      </script>
    </body>
  `);
});

app.get('/journal', (req, res) => {
  res.send(`
    ${STYLE}
    <body>
    <main>
      <h1>Gratitude Journal App</h1>
      <p>Welcome to the Gratitude Journal App, a simple yet powerful tool designed
      to help you focus on the positive things in your life. In today's fast-paced world,
      it's easy to overlook the good moments and get caught up in the challenges and setbacks.
      Our app aims to reverse that trend by encouraging you to reflect on what you are thankful for each day.</p>
      <h3>How Does It Work?</h3>
      <p><b>Daily Entries:</b> Take a few minutes each day to write down what you're
      thankful for. Whether it's your family, your health, or even a good cup of coffee,
      jotting it down can make all the difference.</p>
      <p><b>Mood Tags:</b> Along with your entry, tag your current mood. This helps you
      understand the correlation between your state of mind and the things you're grateful for.</p>
      <p><b>View History:</b> Look back at your past entries to remind yourself of the good times,
      especially when you're feeling down.</p>
      <p><b>Reminders:</b> Set daily reminders to make your gratitude entry. Consistency is key in maintaining a positive outlook on life.</p>
      <h3>Why Keep a Gratitude Journal?</h3>
      <p><b>Enhanced Mental Health:</b> Regularly focusing on positive aspects of your life can significantly improve your mental well-being.</p>
      <p><b>Improved Sleep:</b> A positive mindset before bedtime can improve the quality of your sleep.</p>
      <p><b>Stronger Relationships:</b> Recognizing and appreciating the good in others can lead to more meaningful and fulfilling relationships.</p>
      <p>Take the first step in transforming your outlook on life. Start your Gratitude Journal today!</p>
      <a href="/affirmations">Motivate Affirmations</a>
      </main>
    </body>
  `);
});

app.get('/tracker', (req, res) => {
  res.send(`
    ${STYLE}
    <body>
    <main>
      <h1>Mood Tracker App</h1>
      <p>Welcome to the Mood Tracker App, your digital companion for emotional
      well-being and mental health. In today’s busy life, it’s often easy to
      ignore our feelings and emotions. Our app helps you become more aware of your emotional states,
      thereby empowering you to take steps to improve your mood and overall mental health.</p>
      <h3>Key Features:</h3>
      <ol>
        <li><b>Mood Logging:</b> Log your mood at different times of the day.
        Choose from a range of emotions such as happy, sad, anxious, and relaxed.</li>
        <li><b>Mood Analytics:</b> Get a visual representation of your mood swings over a week, month,
        or year. This helps you understand your emotional patterns better.</li>
        <li><b>Daily Affirmations:</b> Receive daily affirmations tailored to your current mood, helping you
        start the day on a positive note.</li>
        <li><b>Tips and Resources:</b> Based on your logged moods, receive tips, articles, and exercises to help
        improve your emotional well-being.</li>
        <li><b>Privacy and Security:</b> Your emotional data is sensitive, and we ensure it’s stored securely
        with the highest levels of encryption.</li>
      </ol>
      </main>
    </body>
  `);
});

app.get('/random-acts', (req, res) => {
  res.send(`
    ${STYLE}
    <body>
    <main>
      <h1>Random Acts of Kindness App</h1>
      <p>Welcome to the Random Acts of Kindness App, your go-to platform for spreading positivity,
      kindness, and happiness in the world around you. In the hustle and bustle of daily life,
      we often forget the power of simple acts of kindness. This app is designed to not only
      remind you of this power but also to make it easy and rewarding to act upon it.</p>
      <h3>Key Features:</h3>
      <ol>
        <li><b>Daily Challenges:</b> Receive a daily challenge encouraging you to perform a specific act of
        kindness, ranging from simple gestures like smiling at a stranger to more involved acts like volunteering.</li>
        <li><b>Kindness Journal:</b> Keep a record of your kind acts, reflect on the experience, and see
        your kindness footprint grow over time.</li>
        <li><b>Community Stories:</b> Share your own stories and read inspiring acts of kindness
        performed by others in the community.</li>
      </ol>
      <br>
      <a href="/challenges">Daily Challenges</a>
      </main>
    </body>
  `);
});

app.get('/affirmations', (req, res) => {
  res.json(affirmations_for_happier_life);
});

app.get('/challenges', (req, res) => {
  res.contentType("application/xml").send(`
    <xml version="1.0" encoding="UTF-8">
    <DailyChallenges>
      <Challenge_1>Smile at a stranger.</Challenge_1>
      <Challenge_2>Compliment someone.</Challenge_2>
      <Challenge_3>Write down three things you're grateful for.</Challenge_3>
      <Challenge_4>Take a short walk outside.</Challenge_4>
      <Challenge_5>Call or message a friend you haven't spoken to in a while.</Challenge_5>
      <Challenge_6>Donate to a cause you care about.</Challenge_6>
      <Challenge_7>Prepare a healthy meal.</Challenge_7>
      <Challenge_8>Listen to uplifting music.</Challenge_8>
      <Challenge_9>Unplug from digital devices for an hour.</Challenge_9>
      <Challenge_10>Practice deep breathing or meditation.</Challenge_10>
    </DailyChallenges>
    </xml>
  `);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
