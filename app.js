/* SPARK is intentionally local: the catalog below is the product, not an AI claim. */
const catalog = [
  ['Study Sprint Board','Web Development','Beginner','Under 1 hour','Turn a vague study goal into one focused, visible sprint.','HTML, CSS, JavaScript',['Add tasks','Run a timer','Mark wins'],'Add keyboard shortcuts'],
  ['Roommate Splitter','Web Development','Beginner','1 day','Make shared expenses transparent before they become awkward.','JavaScript, LocalStorage',['Add expenses','Show balances','Export a summary'],'Add receipt scanning'],
  ['Color Palette Lab','Web Development','Beginner','Under 1 hour','Preview three hand-picked color palettes before choosing a page theme.','HTML, CSS, JavaScript',['Choose a palette','Preview a card','Show hex codes'],'Add a contrast checker'],
  ['Campus Event Radar','Web Development','Intermediate','1 week','Give students one place to discover what is happening on campus.','React, JSON, CSS',['Filter events','Save favorites','Show event details'],'Add calendar export'],
  ['Portfolio Critic','Web Development','Advanced','1 month','Give first-time developers a clear checklist for improving their portfolio.','Next.js, TypeScript, SQLite',['Score sections','Show feedback','Track revisions'],'Add shareable reports'],
  ['Mood-to-Playlist','AI/ML','Beginner','1 week','Train a small mood classifier on labeled example sentences to suggest music genres.','Python, scikit-learn, CLI',['Load labeled examples','Evaluate held-out sentences','Suggest a genre'],'Train on personal labels'],
  ['Lecture Note Sorter','AI/ML','Intermediate','1 week','Make scattered class notes searchable by topic and urgency.','Python, embeddings, SQLite',['Import notes','Find similar topics','Tag action items'],'Add citation links'],
  ['Leaf Classifier Lab','AI/ML','Advanced','1 month','Compare a few leaf conditions using a labeled dataset and a small image-classification demo.','Python, TensorFlow, FastAPI',['Load labeled photos','Evaluate predictions','Show example care notes'],'Compare an optional plant-identification API'],
  ['Spam Shield','AI/ML','Intermediate','1 week','Teach people why a suspicious message looks suspicious.','Python, Naive Bayes, Flask',['Paste a message','Highlight signals','Give a confidence score'],'Add multilingual examples'],
  ['Gesture DJ','AI/ML','Advanced','1 month','Make a playful music controller for hands-free moments.','Python, MediaPipe, Web Audio',['Detect gestures','Map controls','Show live state'],'Add custom gesture training'],
  ['One-Button Dungeon','Games','Beginner','Under 1 hour','Build a text-only push-your-luck game where each click wins treasure or ends the run.','HTML, JavaScript',['Roll an encounter','Show the score','Restart a run'],'Add illustrated encounters'],
  ['Co-op Word Relay','Games','Intermediate','1 week','Let two browser clients take turns chaining words in a shared countdown room.','JavaScript, WebSockets, Node.js',['Join a room','Check the starting letter','Track turns'],'Add dictionary validation'],
  ['Orbit Defender','Games','Intermediate','1 week','Practice timing and spatial reasoning while protecting a tiny planet.','Canvas, JavaScript, Web Audio',['Rotate defense','Spawn waves','Upgrade shields'],'Add boss patterns'],
  ['Mystery at 404','Games','Intermediate','1 week','Teach web concepts through a short detective puzzle.','React, CSS, local data',['Explore clues','Solve puzzles','Track evidence'],'Add branching endings'],
  ['Procedural Garden','Games','Advanced','1 month','Let players grow a unique, endlessly generated digital garden.','Phaser, TypeScript, seedrandom',['Generate plots','Plant seeds','Save a garden'],'Add day/night ambience'],
  ['File Tidy Preview','Automation','Beginner','Under 1 hour','Print a proposed folder for each download so you can review a sorting plan before moving files.','Python, pathlib, CLI',['List files','Group by extension','Print proposed paths'],'Add confirmed moves with a change log'],
  ['Deadline Digest','Automation','Beginner','1 day','Convert a simple task list into a daily priority briefing.','Python, JSON, CLI',['Read tasks','Rank urgency','Print a digest'],'Add a morning notification'],
  ['Screenshot Archivist','Automation','Intermediate','1 week','Automatically name and sort screenshots so useful references resurface.','Python, OCR, SQLite',['Watch a folder','Extract text','Search archives'],'Add thumbnail previews'],
  ['Meeting Action Miner','Automation','Advanced','1 month','Pull clear next steps from a transcript without losing the original context.','Python, spaCy, FastAPI',['Upload text','Extract owners','Export tasks'],'Add confidence review'],
  ['CSV Shape Shifter','Automation','Intermediate','1 week','Make intimidating CSV cleanup approachable for non-programmers.','React, Papa Parse, Web Workers',['Preview data','Transform columns','Download output'],'Add reusable recipes'],
  ['Desk Weather Orb','Hardware','Intermediate','1 week','Build a desk light that maps weather readings to LED colors, starting with sample data.','ESP32, LED ring, sample JSON',['Load sample conditions','Map conditions to colors','Show stale-data status'],'Connect an optional weather API'],
  ['Plant Thirst Signal','Hardware','Beginner','1 week','Give a plant a gentle voice before it needs rescuing.','Arduino, soil sensor, buzzer',['Read moisture','Set a threshold','Display status'],'Add a water history'],
  ['Smart Library Light','Hardware','Intermediate','1 week','Make a study lamp that adapts to focus time and ambient light.','Raspberry Pi, Python, sensors',['Measure light','Run focus cycles','Set brightness'],'Add presence detection'],
  ['Pocket Queue Button','Hardware','Advanced','1 month','Let a small physical button safely add requests to a shared queue.','ESP32, MQTT, Node.js',['Press to submit','Sync a queue','Show feedback'],'Add a tiny receipt printer'],
  ['Bike Safety Beacon','Hardware','Intermediate','1 week','Make cycling signals more visible without touching a phone.','Arduino, accelerometer, LEDs',['Detect braking','Signal turns','Conserve power'],'Add a vibration alert'],
  ['Tiny Habit Coach','Mobile Apps','Beginner','1 week','Track a few daily habits on a phone with a simple local completion history.','React Native, AsyncStorage',['Create habits','Tap completion','Browse daily history'],'Add streak calculations'],
  ['Campus Carpool Prototype','Mobile Apps','Intermediate','1 week','Test a campus ride-board flow with sample routes and local ride requests.','Flutter, local JSON',['Browse sample rides','Filter destinations','Save a request locally'],'Add an authenticated shared backend'],
  ['Pocket Pantry','Mobile Apps','Beginner','1 week','List pantry items by expiry date to decide what to use next.','Flutter, SQLite',['Enter items manually','Set expiry dates','Sort by expiry'],'Add barcode scanning'],
  ['Focus Soundscapes','Mobile Apps','Advanced','1 month','Create a personalized sound environment for deep work.','SwiftUI, AVFoundation',['Mix layers','Save presets','Run a timer'],'Add adaptive mixing'],
  ['Offline Trail Notes','Mobile Apps','Intermediate','1 week','Keep a local trail journal with observations and coordinates where there is no signal.','Kotlin, Room, location APIs',['Write a note','Save coordinates','Browse saved notes'],'Add photo attachments'],
  ['Compliment Compiler','Just for Fun','Beginner','Under 1 hour','Combine hand-written phrases into playful compliments for a friend.','HTML, CSS, JavaScript',['Mix phrases','Show a compliment','Copy the text'],'Add themed packs'],
  ['Keyboard Pet','Just for Fun','Beginner','1 day','Give your typing a tiny companion that reacts to your rhythm.','JavaScript, CSS animations',['Track keystrokes','Feed the pet','Unlock moods'],'Add idle animations'],
  ['Internet Time Capsule','Just for Fun','Intermediate','1 week','Bottle a message and reveal it to your future self.','React, IndexedDB, CSS',['Write a capsule','Set a date','Reveal safely'],'Add signed capsules'],
  ['Emoji Weather Report','Just for Fun','Beginner','Under 1 hour','Turn manually selected weather conditions into a playful emoji report.','HTML, JavaScript',['Select a condition','Map it to emoji','Show a matching caption'],'Connect an optional weather API'],
  ['Conspiracy Corkboard','Just for Fun','Advanced','1 month','Turn a list of facts into an interactive mystery board for game nights.','Svelte, SVG, IndexedDB',['Pin facts','Connect clues','Export a board'],'Add multiplayer editing'],
  ['Study Quiz Cards','Web Development','Beginner','Under 1 hour','Review five hand-written questions with answer cards and a simple self-check score.','HTML, JavaScript, local question array',['Show a question','Reveal its answer','Count correct answers'],'Add a topic selector'],
  ['CSS Observatory','Web Development','Intermediate','1 day','Visualize browser layout rules so invisible CSS becomes easier to learn.','HTML, CSS, JavaScript',['Inspect boxes','Toggle rules','Explain changes'],'Add flex/grid challenges'],
  ['Bug Hunt Bingo','Games','Beginner','1 day','Turn debugging practice into a playful checklist with real code smells.','HTML, CSS, JavaScript',['Draw a bug','Track progress','Show hints'],'Add a team leaderboard'],
  ['Receipt Name Planner','Automation','Beginner','Under 1 hour','Generate a consistent receipt filename from a manually entered date, vendor, and amount.','Python, CLI',['Enter receipt details','Clean filename characters','Print a suggested name'],'Add file selection and confirmed renaming'],
  ['Focus Desk Monitor','Hardware','Advanced','1 month','Help a shared workspace understand noise and light patterns.','Raspberry Pi, Python, sensors',['Read sensors','Chart trends','Set alerts'],'Add a privacy-first local dashboard'],
  ['Micro Journal','Mobile Apps','Beginner','Under 1 hour','Build a phone-sized web page that saves one short reflection on the current device.','HTML, CSS, JavaScript, LocalStorage',['Write a sentence','Choose a feeling','Reload the saved entry'],'Add dated entries and history'],
  ['Transit Delay Decoder','Web Development','Intermediate','1 week','Translate confusing service alerts into a clear commute decision.','TypeScript, React, GTFS',['Import alerts','Explain impact','Save routes'],'Add accessible notifications'],
  ['Sound Memory Match','Games','Intermediate','1 week','Train auditory memory with a calm matching game anyone can play.','Web Audio, Canvas, JavaScript',['Create tones','Match pairs','Track accuracy'],'Add haptic feedback'],
  ['Mood Badge','Hardware','Beginner','1 day','Use the built-in buttons and LED grid of a micro:bit to display a chosen mood icon.','Micro:bit, MakeCode',['Cycle mood icons','Display a selection','Reset the display'],'Add a daily mood log'],
  ['Classroom Question Box','Web Development','Intermediate','1 week','Prototype a shared class question queue with student submissions and teacher review.','HTML, CSS, Firebase',['Submit a question','Review pending questions','Mark answered'],'Add voting with per-user limits'],
  ['Recipe Constraint Solver','AI/ML','Advanced','1 month','Find plausible meals from ingredients and dietary constraints.','Python, FastAPI, SQLite',['Enter ingredients','Apply constraints','Rank recipes'],'Add pantry learning'],
  ['Tiny Team Kanban','Web Development','Intermediate','1 week','Make a focused project board for a small hackathon team.','React, IndexedDB, CSS',['Create columns','Assign cards','Show activity'],'Add local collaboration'],
  ['AR Museum Labels','Mobile Apps','Advanced','1 month','Make a phone camera turn museum objects into approachable mini-stories.','Unity, AR Foundation, C#',['Recognize markers','Show labels','Save favorites'],'Add audio narration'],
  ['Random Acts Map','Just for Fun','Intermediate','1 week','Turn small good deeds into an anonymous constellation of community energy.','Leaflet, JavaScript, SQLite',['Add a deed','Browse the map','Filter themes'],'Add weekly constellation art'],
];

const ideas = catalog.map((row, index) => ({id:index+1,title:row[0],category:row[1],difficulty:row[2],time:row[3],description:row[4],stack:row[5],features:row[6],challenge:row[7],purpose:`${row[4]} This is a small, demonstrable build with a clear user moment.`,teamRoles:['Product + UX / define the flow','Frontend / build the interface','Backend or hardware / make the core work','QA + demo / test and tell the story']}));
const CONSENT_KEY='spark-consent';
let consent=null;try{consent=localStorage.getItem(CONSENT_KEY)}catch{}
const state={category:'All',difficulty:'All',time:'All',team:false,current:null,history:[],saved:loadSaved()};
const $=id=>document.getElementById(id);
const categories=['All','Web Development','AI/ML','Games','Automation','Hardware','Mobile Apps','Just for Fun'];
const difficulties=['All','Beginner','Intermediate','Advanced'];
const times=['All','Under 1 hour','1 day','1 week','1 month'];
function loadSaved(){
  try{
    const stored=JSON.parse(localStorage.getItem('spark-saved')||'[]');
    if(!Array.isArray(stored))return [];
    const ids=new Set(stored.map(entry=>entry&&typeof entry==='object'&&!Array.isArray(entry)?entry.id:entry).filter(Number.isSafeInteger));
    return ideas.filter(idea=>ids.has(idea.id));
  }catch{return []}
}
function saveLocal(){if(consent==='denied'){showToast('Saving is off — this idea lasts for this session only');return}try{localStorage.setItem('spark-saved',JSON.stringify(state.saved.map(idea=>idea.id)))}catch{showToast('Saved for this session only')}}
let toastTimer;
function showToast(message){const toast=$('toast');clearTimeout(toastTimer);toast.textContent=message;toast.classList.add('show');toastTimer=setTimeout(()=>toast.classList.remove('show'),3500)}
function renderButtons(){
  $('categoryFilters').innerHTML=categories.map(x=>`<button class="chip ${state.category===x?'active':''}" aria-pressed="${state.category===x}" data-filter="category" data-value="${x}">${x}</button>`).join('');
  $('difficultyFilters').innerHTML=difficulties.map(x=>`<button class="${state.difficulty===x?'active':''}" aria-pressed="${state.difficulty===x}" data-filter="difficulty" data-value="${x}">${x}</button>`).join('');
  $('timeFilters').innerHTML=times.map(x=>`<button class="${state.time===x?'active':''}" aria-pressed="${state.time===x}" data-filter="time" data-value="${x}">${x}</button>`).join('');
  $('teamButton').classList.toggle('active',state.team);$('teamButton').setAttribute('aria-pressed',state.team);$('teamButton').querySelector('i').textContent=state.team?'ON':'OFF';
}
function matches(idea){return (state.category==='All'||idea.category===state.category)&&(state.difficulty==='All'||idea.difficulty===state.difficulty)&&(state.time==='All'||idea.time===state.time)}
function matchingIdeas(){let result=ideas.filter(matches);if(state.team) result=result.filter(i=>i.difficulty!=='Beginner' || i.time!=='Under 1 hour');return result}
function chooseIdea(force=false){
  if(force){state.category='All';state.difficulty='All';state.time='All';renderButtons()}
  let pool=force?ideas:matchingIdeas();
  if(!pool.length){showToast('No exact matches — filters softened');pool=ideas.filter(i=>state.category==='All'||i.category===state.category);if(!pool.length)pool=ideas}
  let unseen=pool.filter(i=>!state.history.includes(i.id));
  if(!unseen.length){state.history=state.history.filter(id=>!pool.some(i=>i.id===id));unseen=pool}
  if(pool.length>1){
    const alternatives=unseen.filter(i=>i.id!==state.current?.id);
    if(alternatives.length)unseen=alternatives;
  }
  const picked=unseen[Math.floor(Math.random()*unseen.length)];state.history.push(picked.id);state.current=picked;renderIdea();if(force)showToast('Surprise signal received');
}
function renderSaveButton(){const on=!!state.current&&state.saved.some(x=>x.id===state.current.id);$('saveButton').classList.toggle('saved',on);$('saveButton').setAttribute('aria-pressed',String(on));$('saveButton').innerHTML=on?'♥ <span>SAVED</span>':'♡ <span>SAVE IDEA</span>'}
 function renderIdea(){const i=state.current;if(!i)return;$('resultNumber').textContent=`#${String(i.id).padStart(3,'0')}`;$('ideaCard').innerHTML=`<div class="idea-top"><span class="tag">${i.category.toUpperCase()}</span><span class="tag purple">${i.difficulty.toUpperCase()}</span><span class="tag">${i.time.toUpperCase()}</span></div><h3>${i.title}</h3><p class="idea-description">${i.description}</p><div class="detail-grid"><div><span class="detail-label">THE MISSION</span><span class="detail-value">${i.purpose}</span></div><div><span class="detail-label">RECOMMENDED STACK</span><span class="detail-value">${i.stack}</span></div></div><div class="features"><span class="detail-label">CORE FEATURES</span><div class="feature-list">${i.features.map(f=>`<span class="feature">${f}</span>`).join('')}</div></div><div class="challenge"><b>LEVEL UP</b>${i.challenge}</div>${state.team?`<div class="team-plan"><span class="detail-label">TEAM SPLIT / 2–5 PEOPLE</span>${i.teamRoles.map(r=>`<span class="team-role">${r}</span>`).join('')}</div>`:''}`;$('roadmapPanel').classList.add('hidden');$('roadmapButton').setAttribute('aria-expanded','false');renderSaved()}
function renderSaved(){ $('savedCount').textContent=state.saved.length;$('savedHeadingCount').textContent=`(${state.saved.length})`;$('matchCount').textContent=matchingIdeas().length;$('ideaTotal').textContent=ideas.length;if(!state.saved.length){$('savedList').innerHTML='<div class="empty-state"><span>♡</span><p>Nothing saved yet.</p><small>Bookmark a promising signal and it will appear here.</small></div>';return}$('savedList').innerHTML=state.saved.map(i=>`<div class="saved-item"><div><h3>${i.title}</h3><p>${i.category} · ${i.difficulty} · ${i.time}</p></div><button class="remove-save" data-remove="${i.id}" type="button" aria-label="Remove ${i.title}">×</button></div>`).join('')}
function toggleSave(){if(!state.current)return;let ix=state.saved.findIndex(x=>x.id===state.current.id);if(ix>=0){state.saved.splice(ix,1);showToast('Removed from collection')}else{state.saved.push(state.current);showToast('Idea saved to collection')}saveLocal();renderSaveButton();renderSaved()}
function roadmapSteps(i){return [
  ['01 / DEFINE','Write the one-sentence user promise and sketch the happy path.'],
  ['02 / SCAFFOLD','Create the smallest screen that can accept real input.'],
  ['03 / BUILD',`Implement ${i.features[0].toLowerCase()} first, then layer in the other two.`],
  ['04 / DEMO','Test the edge cases, polish the first 30 seconds, and share it.']
]}
async function copyCurrent(){
  if(!state.current)return;
  const i=state.current;
  const text=`${i.title}\nCategory: ${i.category}\n${i.description}\n\nMission: ${i.purpose}\nStack: ${i.stack}\nDifficulty: ${i.difficulty} · Time: ${i.time}\nFeatures: ${i.features.join(', ')}\nLevel up: ${i.challenge}\n\nBuild roadmap:\n${roadmapSteps(i).map(step=>step.join(': ')).join('\n')}${state.team?`\n\nTeam split / 2–5 people:\n${i.teamRoles.join('\n')}`:''}`;
  $('manualCopy')?.remove();
  try{
    if(!navigator.clipboard||typeof navigator.clipboard.writeText!=='function'){fallbackCopy(text);return}
    await navigator.clipboard.writeText(text);showToast('Idea details copied');
  }catch{fallbackCopy(text)}
}
function fallbackCopy(text){
  const panel=document.createElement('section');panel.id='manualCopy';panel.className='panel';panel.style.padding='20px';
  const label=document.createElement('label');label.htmlFor='manualCopyText';label.textContent='Automatic copy is unavailable. Select these details and press Ctrl+C (Command+C on Mac), or use your device’s Copy menu.';
  const area=document.createElement('textarea');area.id='manualCopyText';area.value=text;area.readOnly=true;area.rows=12;area.style.cssText='display:block;width:100%;margin:12px 0;color:#fff;background:#111827;padding:12px;';
  panel.append(label,area);$('copyButton').parentElement.after(panel);area.focus();area.select();
  let copied=false;try{copied=document.execCommand('copy')===true}catch{}
  if(copied){panel.remove();$('copyButton').focus();showToast('Idea details copied');return}
  const close=document.createElement('button');close.type='button';close.textContent='Close copy details';close.addEventListener('click',()=>{panel.remove();$('copyButton').focus()});panel.append(close);
  panel.scrollIntoView({behavior:'smooth',block:'nearest'});showToast('Automatic copy blocked — details are selected below the actions');
}
function showRoadmap(){const i=state.current;if(!i)return;const expanded=$('roadmapPanel').classList.contains('hidden');$('roadmapButton').setAttribute('aria-expanded',String(expanded));$('roadmapPanel').innerHTML=`<h3>⌁ Build roadmap <span class="section-kicker">// START SMALL, SHIP OFTEN</span></h3><div class="roadmap-list">${roadmapSteps(i).map(([title,body])=>`<div class="roadmap-step"><b>${title}</b>${body}</div>`).join('')}</div>`;$('roadmapPanel').classList.toggle('hidden',!expanded);if(expanded)$('roadmapPanel').scrollIntoView({behavior:'smooth',block:'nearest'})}
document.addEventListener('click',e=>{const filter=e.target.closest('[data-filter]');if(filter){state[filter.dataset.filter]=filter.dataset.value;renderButtons();const stillMatches=state.current&&matchingIdeas().some(i=>i.id===state.current.id);if(stillMatches)renderSaved();else chooseIdea();return}const remove=e.target.closest('[data-remove]');if(remove){state.saved=state.saved.filter(i=>i.id!==Number(remove.dataset.remove));saveLocal();renderSaved();if(state.current)renderSaveButton();return}});
$('generateButton').addEventListener('click',()=>chooseIdea());$('surpriseButton').addEventListener('click',()=>chooseIdea(true));$('resetButton').addEventListener('click',()=>{state.category='All';state.difficulty='All';state.time='All';state.team=false;renderButtons();renderSaved();chooseIdea()});$('teamButton').addEventListener('click',()=>{state.team=!state.team;renderButtons();renderSaved();chooseIdea()});$('saveButton').addEventListener('click',toggleSave);$('copyButton').addEventListener('click',copyCurrent);$('roadmapButton').addEventListener('click',showRoadmap);$('savedNav').addEventListener('click',()=>$('savedSection').scrollIntoView({behavior:'smooth'}));$('clearSavedButton').addEventListener('click',()=>{if(state.saved.length){state.saved=[];saveLocal();renderSaved();if(state.current)renderSaveButton();showToast('Collection cleared')}});
renderButtons();renderSaved();chooseIdea();
const banner=$('consentBanner');if(banner&&!consent)banner.hidden=false;
$('consentAccept')?.addEventListener('click',()=>{consent='granted';try{localStorage.setItem(CONSENT_KEY,'granted')}catch{};if(banner)banner.hidden=true;showToast('Preferences saved on this device')});
$('consentDecline')?.addEventListener('click',()=>{consent='denied';try{localStorage.setItem(CONSENT_KEY,'denied')}catch{};if(banner)banner.hidden=true;showToast('Understood — nothing new will be saved on this device')});
$('wipeDataButton')?.addEventListener('click',()=>{try{localStorage.removeItem('spark-saved');localStorage.removeItem(CONSENT_KEY)}catch{};consent=null;state.saved=[];renderSaved();renderSaveButton();if(state.current)renderIdea();if(banner)banner.hidden=false;showToast('All local data deleted from this device')});
