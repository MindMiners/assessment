const testData = {};

testData.NeTi = {
  name: 'NeTi',
  option:
    "I love thinking about how to solve problems and I am constantly experimenting on the world and the people around me. I'm happiest when I've got a good challenge in front of me. My default approach to life is to break things down into all their parts and analyze them in order to understand how they work and how to make them better. I love learning and have probably had at least 10 different big interests in my life. Most people might call it quits after high school or college, but to me life is all about growing in knowledge in any variety of fields or interests I have. I'm a critical thinker, devil's advocate, poke holes in your idea person and an imaginative, spontaneous, making very odd connections that sometimes work amazingly well person. I find things like philosophy or psychology deeply fascinating and I love engaging in debates with people to learn what other people think and to see if my arguments hold up. I'm ok with not having an \"answer\", but once I DO have an answer/resolution I believe in deeply, I want to get going!",
  // parent: testData.Ne,
  finalType: 'NeTi',
};

testData.NeFi = {
  name: 'NeFi',
  option:
    "I love people an's important to me to have harmony and be at peace with everyone. I am very compassionate and empathetic and I feel like I'm especially good at understanding individuals and their feelings. I think that showing someone you really heard them and understand what they're saying is way more powerful than giving them advice or telling them “it's all going to be okay.” I am definitely a friendly person, but while I can totally chat someone's ear off, I generally prefer to process my feelings, beliefs, and values internally before I feel comfortable sharing them with people. I also like to think about what other people believe and why they came to believe it. I hate being misunderstood or feeling like I'm not being seen or heard.",
  // parent: testData.Ne,
  finalType: 'NeFi',
};

testData.Ne = {
  name: 'Ne',
  option:
    "My best ideas and creativity are fueled by interacting with the world and people around me. I love exploring ideas and brainstorming with others. I see the world as very open-ended and full of possibilities. I come up with lots of ideas when I'm talking or writing, and it seems like they come out of nowhere in the moment. I don't like getting locked into things - I prefer to keep my options open as much as possible. Having a group of good people to bounce ideas off of and theorize with is really helpful for me. I may be a tad bit terrified of commitment. I've always had a bit of trouble sticking to things. I always need to be doing something new. I get bored easily or dissatisfied and want to just jump on to the next shiny thing, but it's easy to forget to make sure that everything lines up first. I tend to always want to add in new ideas instead of finishing the things I've already started. My biggest fear is that I will spend so much time coming up with ideas that I don't ever pick something and do it.",
  question:
    "Based on your responses, this should sound right to you: To me everything is connected and almost anything is possible. I'm usually looking at the future and thinking about what could be. I essentially live in a world of possibilities that doesn't exist yet. My brain creates a network of interrelatedness between all things so that I can apply knowledge from one area to a totally unrelated area in a new way that no one else has ever thought of before. I'm a bit of a verbal processor. When I ramble, it's likely to be about theories, ideas, and possibilities. If it does, which of the following fits you best? (Otherwise, feel free to go up and try another path!)",
  answers: [testData.NeTi, testData.NeFi],
  // parent: testData.N,
};

testData.NiTe = {
  name: 'NiTe',
  option:
    "I'm not interested in social issues that don't affect me personally as much as I am in practical issues like going to war with other countries, depopulation, or recycling. I don't care that much about what people think about other people. I realize that labels can be useful in the right context, but I don't think they're a good reason to start an argument. I love improving things. I'm good at taking something from 0 to 60, awful or decent to excellence and perfection. I love the taste of victory. I'm happier when I'm achieving my goals. If I'm in charge, I love when people just do what I tell them to. It frustrates me when the person in charge is incompetent and it is not unusual for me to realize that I could do their job better than them. I am somewhat aware of other people's values and feelings, but I won't cater my whole life around making people happy. People's feelings might get hurt sometimes, but someone's got to get the job done.",
  // parent: testData.Ni,
  finalType: 'NiTe',
};

testData.NiFe = {
  name: 'NiFe',
  option:
    'I spend a lot of time dwelling on social issues that center around things like poverty, religion, gender, sexuality, or race, even when they don\'t affect me personally. I find psychology fascinating. I value humanitarian efforts although I am sometimes suspicious of their motives and how well they actually help people. I like the idea of doing something practical to help people, like feeding houseless people or volunteering in a disaster. Although I find people very interesting, I like having a bit of distance from them so that I can study them properly. I don\'t often find people in the world who "get" me, so at any given time I usually only have a handful of friends I trust. I have really good gut instincts and can easily see through shady people - usually before anyone else can.',
  // parent: testData.Ni,
  finalType: 'NiFe',
};
testData.Ni = {
  name: 'Ni',
  option:
    "I spend quite a bit of time in my head where a lot of my thoughts happen at a subconscious level. Everything flows together and it's more like a jumble of spaghetti, the stars in the sky, webs of connections, or a formless eternity that I can pluck things from than a filing cabinet or a library where everything is clearly sorted and organized. I'm good at seeing the patterns in things and jumping ahead several steps in my mind to predict what will happen. My brain usually gives me information in the form of impressions or mental pictures more than specific details and facts which can make it hard to explain what's in my head to other people. I tend to need a lot of alone time. If I have to be fully present in the moment and engaged with the real world for an extended period of time, it gets really exhausting. I can also be a bit of a perfectionist at times.",
  question:
    "Based on your responses, this should sound right to you: I spend a lot of time in my head, probably more than most. ​My inner world shifts around a lot and can be tough to explain to people. I like pondering things and all the abstract connections between them. When something happens or something is said, I'm able to see every connection and implication of what it could mean. I can easily predict all the possibilities of how a situation will play out, and then refine those possibilities down to what I feel is the most likely one. If it does, which of the following fits you best? (Otherwise, feel free to go up and try another path!)",
  answers: [testData.NiTe, testData.NiFe],
  // parent: testData.N,
};

testData.N = {
  name: 'N',
  option:
    "I like to explore intriguing ideas and connections. I frequently think about the abstract or theoretical and rarely get tired of it. I like to think “What if?” and I'm constantly thinking of new possibilities and solutions. I can get consumed by what I am thinking and forget what actually ~is~. I feel very different from most people I meet, and I can think outside the box very easily. I think of so many possibilities that it can get overwhelming at times, and it frustrates me that I am unable to do all the things I can think of.",
  question: 'Which of these sounds most like you?',
  answers: [testData.Ne, testData.Ni],
  // parent: testData.inputData,
};

testData.SeTi = {
  name: 'SeTi',
  option:
    "I love being in the middle of the action and am good at thinking on my feet. Risk is exciting to me and gives me lots to think about. Being a part of something that has lots of little moving pieces to it and that requires tons of long-term thinking is boring. I am definitely a rational thinker - going more with what is logical rather than depending on gut feelings, and I can tend to be quite blunt at times. I like learning, but I do much better in an environment where I can actually touch things and try them myself rather than sitting and listening to someone talk for hours. I like to make things up as I go along. My emotions aren't particularly deep and detailed, they're more a fleeting, in-the-moment sort of thing. I feel best when I just express them as they come up and then move on. I have a bit of a humanitarian side to me, and I like to help people or animals in practical ways where I'm able to.",
  // parent: testData.Se,
  finalType: 'SeTi',
};

testData.SeFi = {
  name: 'SeFi',
  option:
    "I am sensitive to other people's feelings and often hear that I'm a really good listener. It's a goal of mine that everyone who walks away from a conversation with me feels valued, like I cared about them and what they had to say. I generally need some time alone to process my feelings about things. If I'm in a new situation that is uncomfortable and I have negative feelings about it, my default response is usually just to get through it however I can. Once I'm home or away from the situation I can start to process those feelings and understand exactly what was going on. From there I can figure out what I would do if something similar happened again, and the next time I'm able to just rely on that default response. I also have a thirst for efficiency and don't like for things to be overly complicated. I sometimes spend time thinking about ways to reduce things down to as few steps as possible.",
  // parent: testData.Se,
  finalType: 'SeFi',
};

testData.Se = {
  name: 'Se',
  option:
    'I love being able to be present in the moment and not have to think about the future. I have a strong appreciation for beauty and nature. I prefer doing things in the real world to spending all day talking about the theoretical. I love new things and new experiences. I can do really well in high intensity crisis situations or things that call for an eye for beauty, but dealing with more mundane day-to-day life in modern society can be really frustrating with all the arbitrary details and rules. Details can really bog me down.',
  question:
    "Based on your responses, this should sound right to you: I love living in the moment rather than focusing on the past or trying to plan for the future. I need new experiences and spontaneity in my life to feel alive. Freedom is really important to me, and I may even enjoy breaking the rules sometimes. Fun is one of my top priorities. Without it, life becomes very dull. The world is very solid and tangible to me. Whatever I'm experiencing in the moment IS my reality. If it's something negative, it can be hard for me to remember that tomorrow, or next week, will feel any different. I am very in touch with my senses. I have a strong preference for being able to interact with things physically in order to fully understand them. I tend to learn best from trying things out myself in a hands-on way rather than reading or hearing about something. If it does, which of the following fits you best? (Otherwise, feel free to go up and try another path!)",
  answers: [testData.SeTi, testData.SeFi],
  // parent: testData.S,
};

testData.SiTe = {
  name: 'SiTe',
  option:
    "I have a high value for getting stuff done. I love the feeling of checking things off my to-do list. I like to maximize the potential either in people or projects I'm working on. I'm great at seeing potential in people and calling them into it. When I take on a new project, I don't want to sit around talking about it. I want to get started right away. An overall plan is helpful, but don't give me a load of arbitrary details for six months down the road, give me step 1 and I'll ask for step 2 when I'm ready. If I get a feeling about something, it's usually pretty simple and clear. If it's for my own project, I'll usually act on it as soon as the time is right. I feel things quite deeply, but I keep my emotions quite private unless I have someone I trust that I'm very close to. I really love the people who matter to me most, but I'm generally not the type to hug or otherwise be very warm with strangers.",
  // parent: testData.Si,
  finalType: 'SiTe',
};

testData.SiFe = {
  name: 'SiFe',
  option:
    "I love systems and clear set ways of doing things, but for me it's all about how it serves people. A lot of my hobbies are related to my relationships. I might get into something because someone I know likes it, and I want to have something to connect with them over. I express my feelings quite freely, and might go on impassioned rants about how things could be better. I have a select group of people that matter deeply to me, and I look for practical ways to help them. I will go to great lengths to help the people closest to me pursue their dreams. I respect authority but if the rules are unfair or aren't serving any purpose, I might feel like some bending of them is okay. If the person in charge is acting unethically, unfairly, is being overly mean/harsh or seems incompetent, I probably won't communicate it in any way, but I lose all respect for them internally.",
  // parent: testData.Si,
  finalType: 'SiFe',
};

testData.Si = {
  name: 'Si',
  option:
    "I process in a very linear way. I can clearly think from A to B to C and this helps me plan things with comprehensive lists and schedules. I prefer to keep things the same unless a change would clearly be better and I generally dislike surprises. I can usually respect people in higher positions than me, and will generally follow the rules unless I have a good reason to break them. Because I know how to make a good system, I hate when the people who designed a particular system or set of rules didn't know what they were doing, and then I have to navigate the mess they left behind. If I'm in an environment that's not consistent, predictable, and stable, it can be tough to keep up with changes and adapt. My biggest fear is letting people down when they're relying on me. Risk can make me pretty uncomfortable when there's no plan.",
  question:
    "Based on your responses, this should sound right to you: I think systematically and am good at planning out the steps needed to make something happen. I have a strong value for consistency and reliability. I really value highly creative people who can meet my expectations, or even go over and above what I expected. It makes me proud to work with talented people who I can rely on. I like to highlight and promote dependable talented people because I see how valuable they are and want them to do more of what they love. If I'm working for someone else, I need specific, detailed feedback that tells me what I'm doing wrong and how to do it right. I don't do well if I don't know their expectations. If it does, which of the following fits you best? (Otherwise, feel free to go up and try another path!)",
  answers: [testData.SiTe, testData.SiFe],
  // parent: testData.S,
};

testData.S = {
  name: 'S',
  option:
    "I'm fairly practical and sensible, and I learn best from experience. Even if I want to do something great, overall I lean more towards realism and thinking about what will actually work rather than entertaining unrealistic dreams. If I have a good idea, I want to get started on it fairly quickly, whether that's by doing the first step, or creating a plan. I get frustrated if I'm expected to implement a poorly thought out idea. It's easy for me to tell when someone's idea is not going to work in the real world.",
  question: 'Which of these sounds most like you?',
  answers: [testData.Se, testData.Si],
};

testData.FeSi = {
  name: 'FeSi',
  option:
    "As long as I've had some time to think about something, I usually have solidly formed ideas about things and am pretty confident that I'm right. I think through things very linearly and systematically, and ​I may have trouble staying engaged with theoretical talk if I don't see a practical application for it. It's easier for me to see something as useful when I can see how it's going to help people. When I think about something I need to get done, I'm easily able to map out what each individual step will look like. I can even do this for multiple tasks at once - mapping out the next few steps for three things at the same time isn't a huge challenge for me. I have an inner critic and editor. With that serving my value for people, it can make me a bit of an outward perfectionist (this could look like spending extra time getting ready before going somewhere, or taking extra care that my home looks nice). My inner editor is highly conscious of doing things ‘correctly' (based on what that means to me personally). If I don't have time to perfect something I deem important, my perceived imperfection or incompleteness can be really distracting.",
  // parent: testData.Fe,
  finalType: 'FeSi',
};

testData.FeNi = {
  name: 'FeNi',
  option:
    "I like spending time in my head, pondering things and all the abstract connections between them. When something is said, I'm able to see every connection and implication of what it could mean. Often a friend will be talking to me about a rough situation they're going through, but they have trouble putting words to the thing they're experiencing. I find that I am sometimes able to help them take the vague idea of what's going on and put some kind of word-picture to it to make it more clear. I can also often tell how their situation is going to play out, and may try to warn them if it looks like it's not going to go well. I like to bring up alternative perspectives so people can see things from a different point of view than their own. When I'm purely in my head, a lot of it is operating at a subconscious level, or on the “back burner”. Everything flows together and it's more like a jumble of spaghetti, the stars in the sky, an endless eternity, or a vast aura that I can pluck things from than a filing cabinet or a library where everything is clearly sorted and organized. I may not have the easiest time staying on top of practical things like bills, but if I see that not taking care of them is affecting the people I care about, I can push myself to take care of them as soon as possible.",
  // parent: testData.Fe,
  finalType: 'FeNi',
};

testData.Fe = {
  name: 'Fe',
  option:
    "The most important thing to me is my relationships. I pay attention to the important details of people's lives and I actively seek ways to meet people's needs. It makes me happy when people feel that I understand them. My goal is to help and serve people. I see what people could be and love calling them to their potential, encouraging them, and even helping them to figure out a game plan for getting there if I can. I prefer to talk through my feelings, beliefs and values with people close to me to figure out how I really feel. Once I have explored an emotion or vented it to someone close, it's usually easy for me to move on from the situation without being very affected. I can find myself ignoring my own feelings and setting them aside to deal with separately to create harmony, even if the harmony created by doing so is actually false. My biggest fear is being abandoned or rejected by the people I care about most.",
  question:
    "Based on your responses, this should sound right to you: My passion is relationships of all kinds—my friends, family members, and my romantic partner (if I have one) mean the world to me. I'm told that I'm very warm and friendly, and people seem to feel comfortable coming to me for advice or a shoulder to cry on. If I have a ‘gut instinct' about someone or a situation - good or bad - it's usually correct. I really want the people around me to know that I care about them, so I try to find ways to speak their love languages when I can. I invest a lot in people, and it feels good when others want to put as much effort into a relationship as I do. I can have a hard time saying \"no\" when people ask for help at times. Even if it's someone I don't know well, it can be tough to turn them down. If it does, which of the following fits you best? (Otherwise, feel free to go up and try another path!)",
  answers: [testData.FeSi, testData.FeNi],
  // parent: testData.F,
};

testData.FiSe = {
  name: 'FiSe',
  option:
    "I love new experiences and need them frequently to feel alive. Freedom is really important to me and I might even enjoy breaking the rules sometimes. Fun is a very high priority for me. If I'm not having any fun, my life is super lame. I tend to learn best from trying things out myself in a hands-on way rather than reading or hearing about something. I see the world as tangible and real. Whatever I'm experiencing in the moment IS my reality. If it's something negative, it's hard for me to remember that tomorrow, or next week, will feel any different. In general, I really don't like work. Even if the work itself is fine, I hate feeling like I'm not free, and I don't like doing things that aren't fun. Those close to me see me would probably describe me as silly and kind, maybe even adorable. I'm mostly satisfied with a small group of close family and friends. If I do decide to make new friends, I can be somewhat shy and poker-faced in a group of strangers who are just chatting. It's better for me if we can just go do something, like hiking, camping, or kayaking. Doing something together makes it a lot easier for me to connect with them. While I spend a long time mulling over my feelings and values, I find it hard to come to concrete conclusions. I feel like my beliefs are always growing, shifting, and changing. It's more like I'm exploring my beliefs than determining them. In fact, the inside of my head really isn't organized at all - it's a huge world of connections and I use my intuition to navigate it. It can be tough to explain my thoughts to people sometimes because they're not totally solid in my head.",
  // parent: testData.Fi,
  finalType: 'FiSe',
};

testData.FiNe = {
  name: 'FiNe',
  option:
    "I am a dreamer and maybe a bit of an artist too. I'm always looking at the future and thinking about what could be. I often feel like anything is possible. I sometimes form ideas or conclusions seemingly out of nowhere, and all I know is that it feels \"right\" to me. It usually turns out to be accurate, but I often can't explain how I got there. When I ramble, it's likely to be about theories, ideas, and possibilities. Everything I learn goes into a sort of filing cabinet in my head. My brain then creates a network of interrelatedness between it all so that I can apply knowledge from one area to a totally unrelated area in a new way that no one else has ever thought of before. Because the inside of my head is pretty organized, I can usually pull on what I need at any moment. Although I can be pretty abstract in the things I talk about, I am quite organized and linear in my way of thinking. I like to keep things open ended and don't like having to commit to anything, but I may extensively plan out my future because I like to have a good idea of the next few steps I'm going to take to get somewhere. Of course, this doesn't mean that my plans won't change dramatically when some new shiny idea comes up. I have a strong appreciation for good systems that can run with minimal effort on my part, and which allow me to spend more time being creative. I don't mind setting up a detailed system if I know it will be worth it in the long run.",
  // parent: testData.Fi,
  finalType: 'FiNe',
};

testData.Fi = {
  name: 'Fi',
  option:
    "The most important thing to me is my personal beliefs. I am quite private and it takes a while for me to trust people. When I'm not sure what I think yet, pressure from not-as-close friends or strangers to “open up” feels way too vulnerable and uncomfortable. I spend a lot of time trying to understand what certain people believe and why they came to believe it. It's not just people that I know either - I might see someone walk by me and start to think about what kind of person they are, what kind of things they might believe, what their relationship with their parents is like, and how they feel about the clothes they decided to wear that day. I feel like I'm especially good at understanding specific people on an individual basis, and I love developing a couple of really deep relationships rather than having a bunch of acquaintances who don't really know me. I think that showing someone you really heard them and understand what they're saying is way more powerful than giving them advice or telling them “it's all going to be okay.” I prefer to validate people where they're at, and remind them that they're already enough. I hate being misunderstood in relation to my beliefs and values, and I hate feeling like I'm not being seen or heard.",
  question:
    "Based on your responses, this should sound right to you: I am primarily focused inwardly. I'm constantly conscious of my heart, regularly retreating inward and asking, “What do I feel about this?” or “What do I believe about this?\" I usually have an innate sense of how another person probably feels, and can easily picture myself in their shoes without much effort. Although I find people fascinating, I can get exhausted by them pretty easily. My emotions are experienced deeply. It seems like everyone should be able to see what I'm feeling, but in reality I am better than I think at keeping my emotions inside. People often comment that they had no idea I was feeling something when I thought it was blatantly obvious. If it does, which of the following fits you best? (Otherwise, feel free to go up and try another path!)",
  answers: [testData.FiSe, testData.FiNe],
  // parent: testData.F,
};

testData.F = {
  name: 'F',
  option:
    "I have a very high value for people and have strong personal beliefs. I feel like I'm really good at understanding people and their feelings. For me to feel good making a decision, it needs to be aligned with who I am and what I believe in. I get frustrated when people are overly critical/judgmental of others or when they put “logic” over the actual impact a decision will have on people.",
  question: 'Which of these sounds most like you?',
  answers: [testData.Fe, testData.Fi],
};

testData.TeSi = {
  name: 'TeSi',
  option:
    'I am very strategic, linear, and systematic in my thinking. I generally like to stick to proven strategies and traditional ways of doing things. I am pretty black and white in my opinions of how things should be done and can definitely be stubborn at times. I like for things to be clear, predictable, and measurable as often as possible.',
  // parent: testData.Te,
  finalType: 'TeSi',
};

testData.TeNi = {
  name: 'TeNi',
  option:
    "I am an abstract thinker and have a high value for innovation. For the most part, I like to come up with novel ways of doing things. I trust my intuition quite a bit and can usually skip ten steps ahead in predicting how a situation will play out. It's easy for me to see multiple perspectives in an argument, and to highlight the points of view that aren't being expressed.i",
  // parent: testData.Te,
  finalType: 'TeNi',
};

testData.Te = {
  name: 'Te',
  option:
    "I am good at making quick, effective decisions. It's more important to me to keep things moving than to have the perfect solution. I am big on maximizing what actually gets accomplished. I love taking something from 0 to 60 and from awful or decent to excellent. I love the taste of victory and am goal-oriented, but prefer being able to delegate the details of implementation to others so I can steer the ship. I love when people just do what I tell them to. It frustrates me when the person in charge is incompetent and it is not unusual for me to see how I could do their job better than them. I care about people, but sometimes I'm not the most sensitive person. I've probably steamrolled people in the past without realizing it. The worst thing I could imagine would be not accomplishing anything with my life.",
  question:
    "Based on your responses, this should sound right to you: I am highly driven and love the feeling of accomplishing something great. I am a maximizer through and through, and I'm a natural leader. I am all about effectiveness and excellence, and love when I see things running smoothly and doing what they're supposed to do. I don't like dancing around things and prefer when people get to the point. I can definitely be opinionated, but I'm willing to listen if someone intelligent is willing to confidently state their case and not back down. I find that I can say things without thinking at times, that I wish I could take back. If it does, which of the following fits you best? (Otherwise, feel free to go up and try another path!)",
  answers: [testData.TeSi, testData.TeNi],
  // parent: testData.T,
};

testData.TiSe = {
  name: 'TiSe',
  option:
    "I value mastery over basic competence. I like knowing that I can produce excellent results time after time. I am very in touch with my senses and the real world, and love to be able to get my hands dirty and do something tangible. I am pretty comfortable with risk, and may take risks or put myself in situations that are uncertain just to keep things interesting. I definitely live in the moment. I thrive on impulsiveness, and need it to feel alive. I might even enjoy breaking the rules at times. I love being able to do what I want, exactly when I think of doing it. I's important for me to do things that involve experiencing beauty and doing something fun that engages my senses. Something like taking a road trip while blasting the perfect music fuels me back up. I prefer understanding how physical things work - like cars or motorcycles, photography, or other art forms - to learning about theoretical things like philosophy or psychology. However, I can get into more theoretical topics if I see a purpose for the knowledge I'll gain from studying them.",
  // parent: testData.Ti,
  finalType: 'TiSe',
};

testData.TiNe = {
  name: 'TiNe',
  option:
    "I change interests constantly, and value competence over mastery for the most part. I have so many interests that I can't really see myself sticking to one thing for the rest of my life. I need variety and tend to get bored easily. I might study at least 5-10 completely different topics in depth in the span of a year. I want to solve the mysteries of the universe before I die. The only problem is deciding which ones to solve… I have a high appreciation for the theoretical and love thinking about all the possibilities. I am generally future-focused and can have a hard time being present in the moment unless I'm really intentional about it. I consume interesting information as if it's food. I love learning. Give me a fascinating book or access to Google, and I'll be happy for hours (if not years). I am always asking, “How does that work? Why does it work that way?”",
  // parent: testData.Ti,
  finalType: 'TiNe',
};

testData.Ti = {
  name: 'Ti',
  option:
    " I make my best decisions when I can take my time to do research and analyze something from different angles before having to come to a conclusion. I love puzzles and problem solving and I'm happiest when I've got a good challenge in front of me. My default approach to life is to break things down into all their parts and analyze them to understand how they work and how to make them better. I love learning. Most people might call it quits after high school or college, but to me life is all about growing in knowledge and expertise. I sometimes forget that feelings are a thing other people experience. I may accidentally put people off or offend people at times, but don't realize it until later (if at all). My biggest fear is wasting my potential and never solving any meaningful problems.",
  question:
    "Based on your responses, this should sound right to you: I am very logical in my thinking and am always analyzing things and picking them apart to understand how they work. I like work that gives me a constant challenge. I get bored fast if things are too easy. I would consider myself to have a sharp mind, even if others don't always see it. I am pretty independent and like doing things myself where possible to make sure they get done properly. Because of this, I prefer teaching myself things most of the time. I think any problem is solvable given enough time and the right tools. If it does, which of the following fits you best? (Otherwise, feel free to go up and try another path!)",
  answers: [testData.TiSe, testData.TiNe],
  // parent: testData.T,
};

testData.T = {
  name: 'T',
  option:
 "The facts, data, and truth are very important to me. I spend a lot of time thinking about what is logical, and what will be most accurate or effective. I like learning new information and coming up with the optimal solutions to problems. I don't spend as much time focusing on feelings as other people seem to, and I hate the idea of emotionalism clouding my judgement. I struggle to relate to people who chose feelings over facts, especially when it is done at the expense of actually solving a problem.",
  question: 'Which of these sounds most like you?',
  answers: [testData.Te, testData.Ti],
};

testData.inputData = {
  name: 'inputData',
  option: 'inputData',
  question:
    'Which of the following do you identify with most strongly? Everyone has elements of each of these, but think about what you find to consistently be your "core" - the part of you that everything else serves most of the time - especially when you are at your happiest and healthiest.',
  answers: [testData.N, testData.S, testData.F, testData.T],
};

exports.default = testData;
