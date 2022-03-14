\c products_dev;

INSERT INTO products (name, url, description, price, rating, is_featured) VALUES
('COBRA Black Snakes (6pcs)', 'https://images.unsplash.com/photo-1595204930135-f9d0e62644dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bm92ZWx0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60', 'WARNING FLAMMABLE Read directions, adult supervision required! Fun safe kids fireworks', '12', '3', true),
('Chattering Teeth', 'https://media.istockphoto.com/photos/chatter-teeth-picture-id184653760?b=1&k=20&m=184653760&s=170667a&w=0&h=a3sa7-wwB1RBVvnPfyAn_-yFzjYx6MtTOegZjHM9Y5A=', 'Chattering teeth with feet! Wind up action!', '5.41', '3', true),
('Monkey Whoopie Cushion', 'http://api.openverse.engineering/v1/images/4a1c8036-81b2-48a0-902e-cec815b0ea7a/thumb/', 'When anyone sits, for a real Bronx Cheer!', '7', '3', false),
('Coffee Hound Mug', 'http://api.openverse.engineering/v1/images/e0d8223b-2a36-4aef-9cdf-5a0cd126bc0f/thumb/', '"Vintage Novelty Coffee Cup" by GranniesKitchen', '12', '4', true),
('View-Master', 'https://images.unsplash.com/photo-1615402019964-169f5ecbaf05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80', 'Original! Used Condition', '49', '5', true),
('Game Boy COLOR', 'https://images.unsplash.com/photo-1623990672451-13d0fd9780e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHZpbnRhZ2UlMjB0b3l8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', 'Neon Green, RARE', '59', '5', true),
('Rubber Ducky', 'https://images.unsplash.com/photo-1582845512747-e42001c95638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHZpbnRhZ2UlMjB0b3l8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', 'Yellow Rubber Ducky for bath-time fun!', '3.99', '4', true),
('Rubix Cube', 'https://images.unsplash.com/photo-1591991564021-0662a8573199?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHZpbnRhZ2UlMjB0b3l8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60', 'The one and only!', '10.78', '5', true),
('Ghost Stirrer', 'https://images.unsplash.com/photo-1628035280603-74ca33b17259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2l0c2NofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', 'The cutest little scary stirrer youll ever want for booze', '9.99', '5', true),
('Polaroid Camera', 'https://images.unsplash.com/photo-1516962126636-27ad087061cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJldHJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60', 'Excellent condition used works perfectly', '35', '4', true);

INSERT INTO reviews (product_id, reviewer, title, content, rating) VALUES
('7', 'Joe', 'My Favorite', 'Bathtime fun', 3),
('3', 'John', 'Used it on my grandmother on Thanksgiving', 'Hilarious! She was the only one that did not hear it!', 3),
('1', 'Susan', 'Eh', 'My kids were not as thrilled with these snakes as I was when I was their age. Oh well!', 2),
('7', 'Caliana', 'I Love My Rubber Ducky', 'Fond memories of childhood for me and my toddler is happy :)', 5),
('5', 'David', 'Anything retro', 'Nice to see my kid enjoy this viewer as I did when I was young', 4),
('4', 'Bingo', 'Lovely', 'Cool, different coffee and teacup for my aunt', 4),
('6', 'Joelle', 'A lifesaver!','Kept my kid busy so I consider it a blessing!', 4),
('1', 'Steph', 'My all time fave', 'My teen had his friends over and they thought it was hysterical we played with these snakes as kids (..but it kept them BUSY! Jokes on them!', 5),
('6', 'Brianna', 'Game Boys Rock', 'Glad I was able to score this', 4),
('2', 'Gerdy', 'Chatter', 'Left this on the desk of a co-worker who gossips. Hoping they got the hint', 5),
('8', 'Jill', 'Great alternate to keep kid busy', 'Mastered this thing as a kid, got it for my 12 y/o and so far so good', 5),
('10', 'Davida', 'Cool', 'I thought it would be fun to use the photos taken from this camera as mementos for my girlfriends bachelorette', 1),
('9', 'Brittany', 'So Cute', 'I love halloween so I got a bunch of these. Nice for grownup drinks since they are glass', 5),
('10', 'Alex', 'A Joy!','Reminds me of the kodachrome song', 4),
('3', 'Hazel', 'Did not work', 'Whoope cushion arrived damaged. Got my money back', 1),
('8', 'Brad', 'I thought I still had it', 'Had to google the secrets of the rubix cause I did not recall how to solve the darned thing', 4),
('9', 'Gabrielle', 'Love these', 'Made my Halloween a little classier with friends ;)', 5);