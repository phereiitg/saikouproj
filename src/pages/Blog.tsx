
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Blog = () => {
  const [activeSection, setActiveSection] = useState('blog1');

  const blogs = [
    {
      id: 'blog1',
      title: "Superman's Reboot, Batman's Return & Wonder Woman's Future: What This Means for DC Fans in India",
      date: "January 2025",
      category: "DC Universe",
      metaTitle: "Superman 2025 Trailer & DCU Buzz - Hot Topics for Indian Fans",
      metaDescription: "James Gunn's new \"Superman\" trailer has gone viral in India! Explore the 2025 reboot, Batman rumors, and Wonder Woman 3 - everything DC fans are excited about now."
    },
    {
      id: 'blog2',
      title: "Top 10 Anime Characters Indian Fans Want as Figurines (Updated 2025 List)",
      date: "January 2025",
      category: "Anime",
      metaTitle: "Top 10 Anime Characters Indian Fans Want as Figurines",
      metaDescription: "From Gojo to Naruto, here are the most-wanted anime characters Indian fans want as collectible figurines. See if your favorite made the list."
    },
    {
      id: 'blog3',
      title: "Anime Summer 2025: What to Watch & Collect This Season",
      date: "January 2025",
      category: "Anime",
      metaTitle: "Anime Summer 2025: What to Watch & Collect This Season",
      metaDescription: "From Dandadan to Gachiakuta, here's a quick guide to the top anime of Summer 2025 – and why these characters deserve a spot in your collection."
    },
    {
      id: 'blog4',
      title: "Is Shah Rukh Khan Joining the Marvel Cinematic Universe?",
      date: "January 2025",
      category: "Marvel",
      metaTitle: "Is Shah Rukh Khan Joining the Marvel Cinematic Universe?",
      metaDescription: "Rumors are flying about Shah Rukh Khan entering the MCU. Here's what we know, what fans think, and what this means for Indian Marvel collectors."
    },
    {
      id: 'blog5',
      title: "GTA VI Release Date Confirmed: Why It's More Than Just a Game for Collectors",
      date: "January 2025",
      category: "Gaming",
      metaTitle: "GTA VI Release Date Confirmed: Why It's More Than Just a Game for Collectors",
      metaDescription: "Rockstar Games has officially announced the release date for GTA VI: May 26, 2026. Here's what fans can expect – and how this game could inspire the next wave of collectibles."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-orange-100 shadow-sm z-50">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                  alt="Saikou Logo" 
                  className="h-10 w-auto"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-slate-900">Saikou</span>
                  <span className="text-xs text-orange-600 font-medium tracking-wide">Made in India</span>
                </div>
              </Link>
              
              <div className="hidden md:flex items-center gap-8">
                <Link to="/" className="text-slate-700 font-medium hover:text-orange-600 transition-colors">
                  Home
                </Link>
                <Link to="/products" className="text-slate-700 font-medium hover:text-orange-600 transition-colors">
                  Products
                </Link>
                <Link to="/about-us" className="text-slate-700 font-medium hover:text-orange-600 transition-colors">
                  About Us
                </Link>
                <Link to="/contact-us" className="text-slate-700 font-medium hover:text-orange-600 transition-colors">
                  Contact
                </Link>
                <Link to="/my-account" className="text-slate-700 font-medium hover:text-orange-600 transition-colors">
                  Account
                </Link>
                <Link to="/cart" className="bg-orange-600 text-white px-6 py-2.5 rounded-lg hover:bg-orange-700 transition-colors">
                  Cart (0)
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <div className="pt-20">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-orange-50 to-white py-16">
            <div className="container mx-auto px-6">
              <div className="text-center space-y-6">
                <Link to="/" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
                <h1 className="text-5xl font-bold text-slate-900">Saikou Blog</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  Stay updated with the latest in anime, gaming, superheroes, and collectibles. 
                  All the news that matters to fans in India.
                </p>
              </div>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="py-8 bg-slate-50 border-b">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Table of Contents</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map((blog) => (
                  <button
                    key={blog.id}
                    onClick={() => scrollToSection(blog.id)}
                    className={`p-4 rounded-lg text-left transition-colors ${
                      activeSection === blog.id 
                        ? 'bg-orange-600 text-white' 
                        : 'bg-white text-slate-700 hover:bg-orange-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Tag className="w-4 h-4" />
                      <span className="text-sm font-medium">{blog.category}</span>
                    </div>
                    <h3 className="font-semibold text-sm leading-tight">{blog.title}</h3>
                    <div className="flex items-center gap-2 mt-2 text-xs opacity-75">
                      <Calendar className="w-3 h-3" />
                      <span>{blog.date}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Content */}
          <div className="container mx-auto px-6 py-12">
            {/* Blog 1 - Superman */}
            <article id="blog1" className="mb-20">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">DC Universe</span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>January 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <User className="w-4 h-4" />
                      <span>Saikou Team</span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    🦸‍♂️ Superman's Reboot, Batman's Return & Wonder Woman's Future: What This Means for DC Fans in India
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    With James Gunn's new DC Universe launching in 2025, DC fans worldwide, especially in India, have a lot to get excited about. From the upcoming Superman reboot to the anticipated returns of Batman and Wonder Woman, the franchise is being reshaped from the ground up.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed mt-4">
                    Here's what's happening and why Indian superhero fans and collectors should be paying close attention.
                  </p>
                </div>

                <div className="space-y-12">
                  {/* Superman Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">🧍‍♂️ A New Superman Is Here (But It's Not Henry Cavill)</h3>
                    <div className="bg-slate-100 rounded-lg p-4 mb-6">
                      <img src="/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png" alt="David Corenswet as Superman" className="w-full max-w-md mx-auto rounded-lg" />
                      <p className="text-sm text-slate-600 text-center mt-2">David Corenswet in the first poster of Superman.</p>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      After much speculation, it's now confirmed: Henry Cavill will not return as Superman. Instead, the 2025 reboot will feature David Corenswet stepping into the role of a younger, more idealistic Clark Kent.
                    </p>
                    <blockquote className="border-l-4 border-orange-600 pl-4 text-slate-600 italic mb-4">
                      "Our story will be focusing on an earlier part of Superman's life." – James Gunn
                    </blockquote>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      The film, releasing on July 11, 2025, will also introduce characters like Hawkgirl, Guy Gardner (Green Lantern), Mr. Terrific, and even Krypto the Superdog. The costume design returns to a more traditional look (yes, the trunks are back), and early footage promises a mix of emotional depth and epic scale.
                    </p>
                    <p className="text-sm text-slate-500 mb-4">
                      Source: PEOPLE – Superman Reboot Overview (https://people.com/superman-movie-everything-to-know-8764333)
                    </p>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-slate-700">
                        🛒 Love the Man of Steel? Check out the <Link to="/products" className="text-orange-600 hover:text-orange-700 font-medium">Superman Figurine – Man of Steel | Premium Action Figure by Saikou</Link>, a must-have for any collector.
                      </p>
                    </div>
                  </div>

                  {/* Batman Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">🦇 Batman Might Not Be Far Behind</h3>
                    <div className="bg-slate-100 rounded-lg p-4 mb-6">
                      <img src="/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png" alt="Batman" className="w-full max-w-md mx-auto rounded-lg" />
                      <p className="text-sm text-slate-600 text-center mt-2">DC Comics</p>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Although not officially confirmed, strong rumors suggest that Batman could make a surprise appearance in either the Superman reboot or the upcoming Wonder Woman sequel. Meanwhile, a full-fledged Batman film titled The Brave and the Bold is in development as part of the new DCU slate.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      This version of Batman is expected to introduce Damian Wayne (Bruce Wayne's son) and offer a fresh spin on Gotham's dark protector.
                    </p>
                  </div>

                  {/* Wonder Woman Section */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">🛡️ Wonder Woman 3 Is in the Works</h3>
                    <div className="bg-slate-100 rounded-lg p-4 mb-6">
                      <img src="/lovable-uploads/3c35d07e-c58f-4fb2-8ba1-7aa5ed88a07f.png" alt="Wonder Woman" className="w-full max-w-md mx-auto rounded-lg" />
                      <p className="text-sm text-slate-600 text-center mt-2">Wonder Woman of DC Comics.Credit: DC Comics</p>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      The Amazon warrior's journey is far from over. A third Wonder Woman movie has been greenlit, with early buzz pointing to tighter integration with the larger DCU. Whether Gal Gadot reprises the role or a new face takes the mantle, fans can expect another blend of mythological intensity and superhero strength.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      James Gunn confirmed in an exclusive interview with EW that the script is already being written, ensuring that Wonder Woman remains a key figure in the evolving DC universe.
                    </p>
                  </div>

                  {/* Why Indian Fans Should Care */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Indian DC Fans Should Be Paying Attention</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      India's love for superheroes is massive and growing fast. As global franchises evolve, fans here are no longer content with basic merch or low-quality figures. The appetite is shifting toward high-detail, collector-grade pieces that represent beloved characters with the respect they deserve.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      With so many projects coming, now is the perfect time to build or upgrade your DC figurine collection.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-slate-700">
                        👉 Want to geek out with fellow fans, vote on new designs, and get early access to launches?{' '}
                        <a href="https://chat.whatsapp.com/LdEzPs02oZ2LcMy5fhnH5T" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">
                          Join our WhatsApp Figurine Community here.
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* What's Coming Next */}
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">🎬 What's Coming Next in the DC Universe</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">Here's what's confirmed or rumored in the pipeline:</p>
                    <ul className="space-y-2 text-slate-700">
                      <li>• <strong>Superman (2025)</strong>, releasing July 11, starring David Corenswet</li>
                      <li>• <strong>Batman: The Brave and the Bold</strong>, in active development</li>
                      <li>• <strong>Wonder Woman 3</strong>, confirmed with script in progress</li>
                      <li>• <strong>Creature Commandos Season 2</strong>, animated series continuation</li>
                      <li>• <strong>Lanterns</strong>, HBO Max series featuring Hal Jordan and John Stewart</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed mt-4">
                      Stay tuned. 2025 might just be DC's biggest year yet.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Blog 2 - Top 10 Anime */}
            <article id="blog2" className="mb-20">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">Anime</span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>January 2025</span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    🔥 Top 10 Anime Characters Indian Fans Want as Figurines (Updated 2025 List)
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Anime fandom in India isn't just growing – it's exploding. With dubbed shows, merch drops, and fan events happening across cities, anime has become a part of everyday pop culture. But while shows are easy to stream, high-quality figurines of fan-favorite characters are still a rare find.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed mt-4">
                    So we asked the community, dug through fan polls, and tracked anime awards. Here are the top 10 anime characters Indian fans want to see as figurines – and why.
                  </p>
                </div>

                <div className="space-y-8">
                  {[
                    { rank: 1, name: "Sung Jin-Woo", anime: "Solo Leveling", desc: "He's not just trending – he's dominating. After winning Anime of the Year and multiple awards at the 2025 Crunchyroll Anime Awards, Sung Jin-Woo is India's newest obsession. His dark armor, shadow summons, and deadly calm expression make him an absolute must-have for collectors." },
                    { rank: 2, name: "Gojo Satoru", anime: "Jujutsu Kaisen", desc: "Cool, confident, and unstoppable. Whether it's the blindfolded version or Infinity Gojo in action, this is a figure every JJK fan wants on their shelf. His flashy energy attacks make for insane diorama potential." },
                    { rank: 3, name: "Naruto Uzumaki", anime: "Naruto", desc: "The OG icon for Indian fans. From classic Shippuden looks to Sage Mode and Kurama cloak, a Naruto figurine is pure nostalgia wrapped in power." },
                    { rank: 4, name: "Luffy", anime: "One Piece", desc: "The rise of the Netflix live-action only made Luffy more loved in India. His wild poses, straw hat, and Gear 5 transformation are perfect for dynamic figurine sculpts." },
                    { rank: 5, name: "Levi Ackerman", anime: "Attack on Titan", desc: "Calm, calculated, and deadly. A Levi figure mid-air with dual blades and maneuver gear is something AOT fans dream of owning – especially in India where the show's ending trended for weeks." },
                    { rank: 6, name: "Itachi Uchiha", anime: "Naruto", desc: "A symbol of pain and loyalty. Itachi in Akatsuki robes, with Mangekyo Sharingan activated, is a statue that hits both emotionally and aesthetically." },
                    { rank: 7, name: "Zoro", anime: "One Piece", desc: "Scarred, silent, and badass. Zoro's iconic three-sword stance (especially with Enma) would look incredible as a detailed collectible. Indian fans rank him just below Luffy in popularity." },
                    { rank: 8, name: "Sukuna", anime: "Jujutsu Kaisen", desc: "Tattoos. Smirks. Chaos. Sukuna is a villain people love to hate – and a visual treat when done right in figurine form." },
                    { rank: 9, name: "Goku (Ultra Instinct)", anime: "Dragon Ball Super", desc: "DBZ will always have a home in Indian hearts. Goku's Ultra Instinct transformation, with silver hair and flowing aura, remains one of the most iconic anime moments of all time." },
                    { rank: 10, name: "Tanjiro Kamado", anime: "Demon Slayer", desc: "Honest, kind, and deadly when needed. Tanjiro with his water-breathing sword pose and signature haori jacket is an easy fan favorite, especially among newer anime watchers in India." }
                  ].map((character) => (
                    <div key={character.rank} className="bg-white border rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                          {character.rank}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-slate-900 mb-1">
                            {character.name} ({character.anime})
                          </h3>
                          <p className="text-slate-700 leading-relaxed">{character.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">🧠 Did We Miss Your Favorite?</h3>
                    <p className="text-slate-700 mb-4">
                      We're building a community where fans actually influence which characters become real figurines.
                    </p>
                    <a href="https://chat.whatsapp.com/LdEzPs02oZ2LcMy5fhnH5T" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                      👉 Join our WhatsApp group to vote, suggest, and see sneak peeks before anyone else.
                    </a>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">🛒 Want These in Your Collection?</h3>
                    <p className="text-slate-700 mb-4">
                      Some of these characters are already in production. Others are being decided by fan votes. Check the latest drops or upcoming teasers here:
                    </p>
                    <Link to="/products" className="text-orange-600 hover:text-orange-700 font-medium">
                      🔗 Browse Anime Figurines
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Blog 3 - Summer 2025 Anime */}
            <article id="blog3" className="mb-20">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Anime</span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>January 2025</span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Anime Summer 2025: What to Watch &amp; Collect This Season
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    The anime world is heating up this season with some long-awaited sequels and fresh debuts. Whether you're into supernatural chaos, gritty street stories, or sweet slice-of-life vibes, this lineup is packed with collectible-worthy characters.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed mt-4">
                    According to Meristation, Crunchyroll's Summer 2025 anime schedule includes:
                  </p>
                </div>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">🎉 The Summer 2025 Anime Wave Is Here!</h3>
                    
                    <div className="space-y-8">
                      {/* Dandadan */}
                      <div className="bg-white border rounded-lg p-6">
                        <h4 className="text-xl font-bold text-slate-900 mb-3">👻 Dandadan Season 2</h4>
                        <p className="text-slate-700 leading-relaxed mb-3">
                          After the success of its wild first season, Dandadan is back – mixing ghost battles, alien mayhem, and pure chaos. Expect new powers, even crazier visuals, and deeper character lore.
                        </p>
                        <div className="bg-purple-50 p-3 rounded">
                          <p className="text-slate-700">
                            <strong>🧩 Collectible Potential:</strong> Okarun and Momo's upgraded forms + spirit-mode accessories = figurine gold.
                          </p>
                        </div>
                      </div>

                      {/* Kaiju No. 8 */}
                      <div className="bg-white border rounded-lg p-6">
                        <h4 className="text-xl font-bold text-slate-900 mb-3">🧟 Kaiju No. 8 Season 2</h4>
                        <p className="text-slate-700 leading-relaxed mb-3">
                          Kafka's monstrous alter ego continues his fight against giant Kaiju in an even more dangerous world. The animation looks cleaner, and the action even more intense.
                        </p>
                        <div className="bg-red-50 p-3 rounded">
                          <p className="text-slate-700">
                            <strong>🔥 Why You'll Want It on Your Shelf:</strong> Kaiju transformations and elite defense force armor make for epic, high-detail figurines.
                          </p>
                        </div>
                      </div>

                      {/* Gachiakuta */}
                      <div className="bg-white border rounded-lg p-6">
                        <h4 className="text-xl font-bold text-slate-900 mb-3">🪓 Gachiakuta (Debut)</h4>
                        <p className="text-slate-700 leading-relaxed mb-3">
                          A gritty, stylish new anime from the illustrator of Fire Force. This world blends trashpunk aesthetics with supernatural weapon fights – and it's visually stunning.
                        </p>
                        <div className="bg-gray-50 p-3 rounded">
                          <p className="text-slate-700">
                            <strong>🎨 Why It's a Sleeper Hit for Collectors:</strong> Unique character designs, wild weapons, and street-style art direction set it apart.
                          </p>
                        </div>
                      </div>

                      {/* My Dress-Up Darling */}
                      <div className="bg-white border rounded-lg p-6">
                        <h4 className="text-xl font-bold text-slate-900 mb-3">🧵 My Dress-Up Darling Season 2</h4>
                        <p className="text-slate-700 leading-relaxed mb-3">
                          Marin is back, and the cosplay vibes are stronger than ever. The romance blooms, and the costume game levels up – making it a fan-favorite for slice-of-life lovers.
                        </p>
                        <div className="bg-pink-50 p-3 rounded">
                          <p className="text-slate-700">
                            <strong>💖 Collector's Angle:</strong> Detailed cosplay-based figurines with intricate outfits are a big draw here.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">🛍️ Ready to Collect?</h3>
                    <p className="text-slate-700 mb-4">
                      At Saikou, we handcraft collectible figurines based on characters that define fandom – from anime icons to mythological heroes. Our Saikou Premium Figurines are 100% made in India, built for fans who care about quality and detail.
                    </p>
                    <p className="text-slate-700 mb-4">
                      Whether it's an armored Kaiju hero or a ghost-chasing misfit, Summer 2025 is shaping up to be a collector's paradise.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">🔚 Final Thoughts</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      If you're watching any of these shows, chances are you're already imagining them on your desk or shelf. This is the season to start curating your next favorite characters – before they go global.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Stay tuned to Saikou for upcoming drops, character-based releases, and exclusive collector content.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Blog 4 - Shah Rukh Khan Marvel */}
            <article id="blog4" className="mb-20">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">Marvel</span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>January 2025</span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    Is Shah Rukh Khan Joining the Marvel Cinematic Universe?
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Rumors are flying about Shah Rukh Khan entering the MCU. Here's what we know, what fans think, and what this means for Indian Marvel collectors.
                  </p>
                </div>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">🕶️ The Rumor That's Set the Internet on Fire</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Marvel fans in India have one big question on their minds: <strong>Is Shah Rukh Khan really joining the MCU?</strong>
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      The buzz began after Times of India reported insider chatter suggesting that SRK is in early talks with Marvel Studios for a major role – one that might connect with Secret Wars or an upcoming multiverse expansion.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      While there's no official confirmation, the fandom has already taken over Reddit, X (formerly Twitter), and fan forums with wild theories and dream castings.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">🧠 Why SRK × Marvel Makes Total Sense</h3>
                    <ul className="space-y-4 text-slate-700">
                      <li>
                        <strong>Massive Indian Audience:</strong> Disney+ Hotstar is already Marvel's top streaming partner in India. SRK would explode regional viewership.
                      </li>
                      <li>
                        <strong>Past Teasers:</strong> SRK has already cameoed in Deadpool 2 (his poster in Dopinder's cab) and was name-dropped in Ms. Marvel.
                      </li>
                      <li>
                        <strong>MCU's Global Expansion:</strong> Marvel is leaning hard into global stories – just like they did with Namor and Moon Knight.
                      </li>
                    </ul>
                    <blockquote className="border-l-4 border-red-600 pl-4 text-slate-600 italic mt-6">
                      Even Anthony Mackie (Captain America) himself once said in an interview, "SRK is the damn best" when asked about Bollywood in the MCU.
                    </blockquote>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">🎭 Fan Casting Madness: Who Could He Play?</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">The theories are wild, but here are the most popular:</p>
                    <ul className="space-y-3 text-slate-700">
                      <li><strong>Kang Variant:</strong> A charismatic, alternate Kang from another dimension?</li>
                      <li><strong>Beyonder:</strong> A powerful multiverse entity (would be epic with SRK's screen presence)</li>
                      <li><strong>Original Hero:</strong> A new character tied to India's mythology or future multiverse phases</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">🧱 What This Means for Collectors</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">If the SRK–MCU crossover happens, expect:</p>
                    <ul className="space-y-2 text-slate-700 mb-6">
                      <li>• A flood of limited edition merchandise</li>
                      <li>• High-value collectibles of an India-based Marvel character</li>
                      <li>• Global fans turning their attention to Indian-made figurines</li>
                    </ul>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-slate-700">
                        Saikou is already leading the way with high-quality, India-made collectibles. Check out our{' '}
                        <Link to="/products" className="text-red-600 hover:text-red-700 font-medium">Premium Figurine Collection</Link>
                        {' '}– and imagine what we could create if a Bollywood legend joins the superhero multiverse.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">🛡️ Final Thoughts</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Whether this rumor becomes reality or not, one thing is clear: <strong>India wants SRK in the MCU.</strong> And Marvel might just be listening.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Until then, the fandom's imagination is running wild – and for collectors like you, that's the best kind of fuel.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Blog 5 - GTA VI */}
            <article id="blog5" className="mb-20">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Gaming</span>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>January 2025</span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 mb-4">
                    GTA VI Release Date Confirmed: Why It's More Than Just a Game for Collectors
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Rockstar Games has officially announced the release date for GTA VI: May 26, 2026. Here's what fans can expect – and how this game could inspire the next wave of collectibles.
                  </p>
                </div>

                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">🎯 It's Official: GTA VI Drops on May 26, 2026</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      After years of leaks, fan theories, and the record-breaking trailer reveal, Rockstar Games has confirmed that Grand Theft Auto VI will release on:
                    </p>
                    <div className="bg-green-100 p-6 rounded-lg text-center mb-4">
                      <p className="text-2xl font-bold text-green-800">🗓️ May 26, 2026</p>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      This updated timeline replaces earlier "Fall 2025" estimates, as revealed in Rockstar's latest announcements and industry sources.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      The hype is only growing and for good reason.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">🏙️ A Return to Vice City, Reimagined</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      GTA VI is set in the fictional state of Leonida, a modern-day take on Florida, with Vice City at its heart. Think: neon beaches, swampy outskirts, and crime-fueled chaos, but with next-gen polish.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">You'll be playing as:</p>
                    <ul className="space-y-2 text-slate-700 mb-4">
                      <li>• <strong>Lucia Caminos</strong> – GTA's first female protagonist</li>
                      <li>• <strong>Jason Duval</strong> – Her partner in crime (and possibly more)</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed">
                      Their story follows a Bonnie &amp; Clyde-inspired arc, set in an open world that evolves over time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">🔥 What Makes This Release Special</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Rockstar isn't just releasing a sequel. They're launching a culture shift. Here's why:
                    </p>
                    <ul className="space-y-3 text-slate-700 mb-4">
                      <li>• AI-powered NPCs and real-time world changes</li>
                      <li>• Next-gen graphics and immersive weather systems</li>
                      <li>• In-game social media, viral moments, and live-service elements</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed">
                      This isn't just a sandbox, it's a simulation of modern chaos. For content creators, modders, and collectors, this game will set trends.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">🧱 What It Means for Collectors</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      At Saikou, we know when culture shifts, collectibles follow.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">GTA VI will spark:</p>
                    <ul className="space-y-2 text-slate-700 mb-6">
                      <li>• Character busts of Lucia in street gear or Jason with getaway props</li>
                      <li>• Vice City diorama scenes – neon-lit rooftops, alleyways, gas stations</li>
                      <li>• Replica items like iconic vehicles, phones, and custom weapons</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      While we don't have licensed GTA items, we're deeply inspired by gaming culture. And this game? It's the perfect muse.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-slate-700">
                        🛒 Explore what we do make:{' '}
                        <Link to="/products" className="text-green-600 hover:text-green-700 font-medium">
                          Saikou Premium Figurines
                        </Link>
                        {' '}100% made in India, crafted for fans who want something extraordinary on their shelf.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">💬 Final Thoughts</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      May 26, 2026 isn't just a release date. It's a moment.
                    </p>
                    <ul className="space-y-2 text-slate-700 mb-4">
                      <li>• For fans, it's the return of an icon.</li>
                      <li>• For gamers, it's the next frontier.</li>
                      <li>• For collectors it's the start of something big.</li>
                    </ul>
                    <p className="text-slate-700 leading-relaxed">
                      At Saikou, we're not just watching the hype… we're building on it.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* CTA Section */}
          <section className="bg-orange-50 py-16">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Want More Content Like This?</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Join our community to get the latest updates on anime, gaming, superheroes, and collectibles. 
                Plus, vote on which characters we should make next!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://chat.whatsapp.com/LdEzPs02oZ2LcMy5fhnH5T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Join WhatsApp Community
                </a>
                <Link
                  to="/products"
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Browse Figurines
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src="/lovable-uploads/3e213b54-d1c4-457a-8f53-e7fa0d65b186.png" 
                    alt="Saikou Logo" 
                    className="h-8 w-auto"
                  />
                  <span className="text-xl font-bold">Saikou</span>
                </div>
                <p className="text-slate-400">Premium collectibles made in India</p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-orange-400">Explore</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link to="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
                  <li><Link to="/products" className="hover:text-orange-400 transition-colors">Products</Link></li>
                  <li><Link to="/about-us" className="hover:text-orange-400 transition-colors">About Us</Link></li>
                  <li><Link to="/contact-us" className="hover:text-orange-400 transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-orange-400">Support</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link to="/shipping-policy" className="hover:text-orange-400 transition-colors">Shipping Policy</Link></li>
                  <li><Link to="/returns-refunds" className="hover:text-orange-400 transition-colors">Returns & Refunds</Link></li>
                  <li><Link to="/my-account" className="hover:text-orange-400 transition-colors">My Account</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-orange-400">Legal</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link to="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms-conditions" className="hover:text-orange-400 transition-colors">Terms & Conditions</Link></li>
                  <li><Link to="/cookie-policy" className="hover:text-orange-400 transition-colors">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-slate-800">
              <p className="text-slate-400">&copy; 2025 Saikou. Made with ❤️ in India.</p>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Blog;
