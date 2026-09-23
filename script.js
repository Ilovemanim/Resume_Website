const brainImages = {
  2024: "brain_art1.png",
  2025: "brain_art2.png",
  2026: "brain_art.png"
};

const regions = {
  prefrontal: {
    label: "Prefrontal Cortex",
    subtitle: "Planning & Leadership",
    point: [350, 414],
    labelPosition: [200, 250],
    anchor: "end"
  },
  motor: {
    label: "Motor Cortex",
    subtitle: "Action & Practice",
    point: [625, 275],
    labelPosition: [500, 30],
    anchor: "end"
  },
  parietal: {
    label: "Parietal Cortex",
    subtitle: "Mathematics & Spatial Reasoning",
    point: [916, 312],
    labelPosition: [1100, 25],
    anchor: "start"
  },
  visual: {
    label: "Visual Cortex",
    subtitle: "Visualization & Creativity",
    point: [1302, 568],
    labelPosition: [1390, 665],
    anchor: "start"
  },
  broca: {
    label: "Broca's Area",
    subtitle: "Communication & Expression",
    point: [438, 561],
    labelPosition: [200, 615],
    anchor: "end"
  },
  hippocampus: {
    label: "Hippocampus",
    subtitle: "Learning & Research",
    point: [604, 602],
    labelPosition: [604, 840],
    anchor: "middle"
  }
};

const experiences = [

  { 
    title: "Highschool Camp for Brain Science Training", 
    role: "Participant", 
    years: [2026], 
    regions: ["hippocampus", "motor"], 
    description: "The best summer of my life. I got to learn so much about how research is actually done. It was all great execpt the fact that I've decapitated two mice (for research purposes wink)..." 
  },

  { 
    title: "Independent Research", 
    role: "Student Researcher", 
    years: [2026], 
    regions: ["hippocampus", "parietal"], 
    description: "Independent SNN-epilepsy research. It uses the Brian2 simulator in python to recreate a mini brain in python! Visit my github to find out more: https://github.com/Ilovemanim/Capstone-Project-2026" 
  },

  { 
    title: "Global Next Generation Bio Camp — Global Ignite", 
    role: "Top 10 Participant", 
    years: [2026], 
    regions: ["broca", "hippocampus"], 
    description: "Opporunity to introduce my SNN-epilepsy research to academias!" 
  },

  { 
    title: "Neuroscience Research Cartoon Series", 
    role: "Creator", 
    years: [2025, 2026], 
    regions: ["visual", "broca", "hippocampus"], 
    description: "How would I present neuroscience research in a fun, accessible way? With my (not so) great drawing skills, I made cartoon explaining neuroscience research papers. Visit my instagram page to find out more: https://www.instagram.com/neuro86109/" 
  },

  { 
    title: "Neuroscience Education Webinar Series", 
    role: "Presenter", 
    years: [2025], 
    regions: ["broca", "hippocampus"], 
    description: "Presenting Alzheimer's stigma to international students was both exciting and meaningful." 
  },

  { 
    title: "IYNA Summer Program Capstone Track", 
    role: "Participant", 
    years: [2025], 
    regions: ["hippocampus"], 
    description: "The catalyst for my neuroscience learning journey." 
  },

  { 
    title: "Korean Youth Society of Neuroscience", 
    role: "Vice President", 
    years: [2025, 2026], 
    regions: ["prefrontal", "broca", "hippocampus"], 
    description: "A place where everything is neuroscience!" 
  },

  { 
    title: "Korean Youth Leadership Organization", 
    role: "Secretary-General", 
    years: [2025, 2026], 
    regions: ["prefrontal", "broca"], 
    description: "MUN is expensive, time-consuming, and hard. I eradicated all those barriers through KYOMUN." 
  },

  { 
    title: "New Views of Mathematics", 
    role: "Co-Founder & Co-Leader", 
    years: [2024, 2025, 2026], 
    regions: ["prefrontal", "parietal"], 
    description: "I'm a big fan of MIT integration bee. So I thought, why not make one for my school?" 
  },

  { 
    title: "Point of View", 
    role: "Editor-in-Chief", 
    years: [2024, 2025, 2026], 
    regions: ["prefrontal", "broca", "visual"], 
    description: "I've expanded our newspaper club to include student submissions, to truly reflect every student's POV!" 
  },

  { 
    title: "AP Calculus Teacher Assistant", 
    role: "Teaching Assistant", 
    years: [2025, 2026], 
    regions: ["parietal", "broca"], 
    description: "I love it when people understand what I'm teaching!" 
  },

  { 
    title: "1A Hospital International Medical Volunteer Program", 
    role: "Volunteer", 
    years: [2026], 
    regions: ["broca", "motor"], 
    description: "I hate dancing. But here, I danced gangnam style as I watched the pediatric patients laught out of joy." 
  },

  { 
    title: "Seo-Gu Youth Steering Committee", 
    role: "Vice-President", 
    years: [2024, 2025, 2026], 
    regions: ["prefrontal", "motor"], 
    description: "Supported local youth through hosting local events." 
  },

  { 
    title: "Piano", 
    role: "Learning", 
    years: [2024, 2025, 2026], 
    regions: ["motor"], 
    description: "Self-studied for 3 years for a single piece: liebestraum no 3" 
  },

  { 
    title: "Guitar", 
    role: "Learning", 
    years: [2026], 
    regions: ["motor"], 
    description: "Picked up the guitar to play Radiohead songs, hopefully to play for others." 
  }

];

const awards = {
  offCampus: [
    { title: "Highschool Camp for Brain Science Training", year: 2026, award: "Excellence Award", regions: ["prefrontal", "broca", "hippocampus", "parietal"], description: "Received the Excellence Award in recognition of strong participation and performance during the Highschool Camp for Brain Science Training." },
    { title: "Global Next Generation Bio Camp — Global Ignite", year: 2026, award: "Top 10", regions: ["broca", "parietal", "hippocampus"], description: "Selected as a Top 10 participant in the Global Next Generation Bio Camp, recognizing strong engagement with biotechnology-focused activities." },
    { title: "AAPT PhysicsBowl", year: 2026, award: "Silver Award", regions: ["hippocampus"], description: "Received a Silver Award in the AAPT PhysicsBowl, demonstrating strong performance on a challenging physics problem-solving competition." },
    { title: "Horizon Academic Essay Prize", year: 2026, award: "Gold Prize", regions: ["broca", "hippocampus"], description: "Received the Gold Prize for an academic essay, recognizing the quality of the argument, analysis, and written presentation." },
    { title: "Yonsei Model United Nations", year: 2026, award: "Best Delegate", regions: ["prefrontal", "broca", "hippocampus"], description: "Recognized as Best Delegate at Yonsei Model United Nations for effective preparation, substantive debate, diplomacy, and representation of the assigned delegation." },
    { title: "IYF English Speech Competition", year: 2025, award: "Special Award (5th Place)", regions: ["broca"], description: "Received a Special Award and placed fifth in an English speech competition, recognizing communication skills and presentation performance." },
    { title: "UKBC Biology Challenge", year: 2025, award: "Gold", regions: ["hippocampus"], description: "Earned top 5% in the Biology Challenge, despite not taking ay biology course before" },
    { title: "Seo-gu Metropolitan Area Mayoral Certificate", year: 2024, award: "Volunteering", regions: ["motor"], description: "Received a mayoral certificate recognizing participation in volunteering and community-oriented activities." },
    { title: "John Locke Essay Competition", year: 2025, award: "Shortlist", regions: ["broca", "hippocampus"], description: "Reached the shortlist of the John Locke Essay Competition, recognizing a strong academic essay submission." },
    { title: "International Psychology Olympiad", year: 2024, award: "Bronze Award", regions: ["hippocampus"], description: "Received a Bronze Award in an international psychology competition, demonstrating knowledge and analytical engagement with psychological concepts." },
    { title: "AP Scholar with Distinction", year: 2024, award: "One of three middle school students in the world that year", regions: ["hippocampus"], description: "Received AP Scholar with Distinction recognition for strong performance across AP examinations." }
  ],
  onCampus: [
    { title: "Capstone Research Symposium", year: 2026, award: "Best Individual Presentation Award", regions: ["broca", "hippocampus"], description: "Received recognition at the Capstone Research Symposium for presenting and communicating research findings in a formal academic setting." },
    { title: "Capstone Research Symposium", year: 2026, award: "1st Place", regions: ["hippocampus", "parietal"], description: "Received recognition at the Capstone Research Symposium for presenting and communicating research findings in a formal academic setting." },
    { title: "Beaver Computing Challenge", year: 2025, award: "Full Marks", regions: ["parietal"], description: "Achieved full marks in the Beaver Computing Challenge, demonstrating strong computational reasoning and problem-solving skills." },
    { title: "Fryer Contest", year: 2025, award: "Distinction", regions: ["parietal"], description: "Received Distinction in the Fryer Contest, recognizing strong mathematical problem-solving performance." },
    { title: "Cayley Contest", year: 2025, award: "Distinction", regions: ["parietal"], description: "Received Distinction in the Cayley Contest, demonstrating strong mathematical reasoning and problem-solving ability." },
    { title: "Summa Cum Laude", year: 2025, award: "High Honor Roll in School", regions: ["hippocampus"], description: "Received Summa Cum Laude recognition as part of the school's high honor roll for strong academic performance." }
  ]
};


let currentYear = 2024;
let selected = [];

const $ = (selector) => document.querySelector(selector);
const TOUR_KEY = "jihoon-connectome-tour-v2";
const tour = { active:false, step:1, firstRegion:null, targets:{1:"prefrontal",2:"motor"} };

function svgEl(tag, attrs = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[char]));
}
function lockPageScroll(){document.documentElement.classList.add("no-scroll");document.body.classList.add("no-scroll")}
lockPageScroll();

function renderBrainImage(){
  const brainImage=$("#brainImage"); if(!brainImage)return;
  const newSource=brainImages[currentYear];
  if(brainImage.getAttribute("src")===newSource)return;
  brainImage.classList.remove("brain-changed"); brainImage.classList.add("brain-changing");
  setTimeout(()=>{
    brainImage.onload=()=>{requestAnimationFrame(()=>{brainImage.classList.remove("brain-changing");brainImage.classList.add("brain-changed");setTimeout(()=>brainImage.classList.remove("brain-changed"),1100)})};
    brainImage.onerror=()=>brainImage.classList.remove("brain-changing");
    brainImage.src=newSource;
  },350);
}
function pathBetween(a,b,bend=.14){
  const [x1,y1]=a,[x2,y2]=b,dx=x2-x1,dy=y2-y1,length=Math.hypot(dx,dy)||1,nx=-dy/length,ny=dx/length,offset=length*bend;
  return `M ${x1} ${y1} C ${x1+dx*.25+nx*offset} ${y1+dy*.25+ny*offset}, ${x1+dx*.75+nx*offset} ${y1+dy*.75+ny*offset}, ${x2} ${y2}`;
}
function renderLabels(){
  const group=$("#labels"); if(!group)return; group.innerHTML="";
  Object.entries(regions).forEach(([id,r])=>{const [x,y]=r.point,[lx,ly]=r.labelPosition,isSelected=selected.includes(id);
    group.append(
      svgEl("path",{d:`M ${x} ${y} L ${lx} ${ly}`,class:`leader${isSelected?" selected-leader":""}`}),
      Object.assign(svgEl("text",{x:lx,y:ly-8,"text-anchor":r.anchor,class:`region-label${isSelected?" selected-label":""}`}),{textContent:r.label}),
      Object.assign(svgEl("text",{x:lx,y:ly+15,"text-anchor":r.anchor,class:`region-subtitle${isSelected?" selected-subtitle":""}`}),{textContent:r.subtitle})
    );
  });
}
function renderPoints(){
  const group=$("#regionPoints"); if(!group)return; group.innerHTML="";
  Object.entries(regions).forEach(([id,r])=>{const isSelected=selected.includes(id),point=svgEl("g",{class:`region-point${isSelected?" selected":""}`,"data-region":id});
    if(isSelected)point.append(svgEl("circle",{cx:r.point[0],cy:r.point[1],r:23,class:"selected-ring"}),svgEl("circle",{cx:r.point[0],cy:r.point[1],r:13,class:"selected-inner-ring"}));
    point.append(svgEl("circle",{cx:r.point[0],cy:r.point[1],r:isSelected?17:16,class:"halo"}),svgEl("circle",{cx:r.point[0],cy:r.point[1],r:isSelected?8:6,class:"core"}));
    point.addEventListener("click",e=>{e.stopPropagation();toggleRegion(id)}); group.appendChild(point);
  });
}
function renderConnections(){
  const group=$("#connections"); if(!group)return; group.innerHTML="";
  const active=experiences.filter(e=>e.years.includes(currentYear)),pairs=new Map();
  active.forEach(e=>{for(let i=0;i<e.regions.length;i++)for(let j=i+1;j<e.regions.length;j++){const pair=[e.regions[i],e.regions[j]].sort().join("|");pairs.set(pair,(pairs.get(pair)||0)+1)}});
  pairs.forEach((count,pair)=>{const[a,b]=pair.split("|");const path=svgEl("path",{d:pathBetween(regions[a].point,regions[b].point),class:"connection"});path.style.opacity=Math.min(.07+count*.045,.22);group.appendChild(path)});
  if(selected.length===2){const[a,b]=selected;group.appendChild(svgEl("path",{d:pathBetween(regions[a].point,regions[b].point,.19),class:"selected-connection"}))}
}
function renderPanel(){
  const panel=$("#selectedPanel"),title=$("#panelTitle"),subtitle=$("#panelSubtitle"),year=$("#panelYear"),list=$("#experienceList"); if(!panel||!title||!subtitle||!year||!list)return;
  year.textContent=currentYear; const has=selected.length>0; panel.classList.toggle("panel-hidden",!has); $("#main")?.classList.toggle("panel-open",has);
  if(!has){list.innerHTML="";$("#awardsList").innerHTML="";return}
  if(selected.length===1){title.innerHTML=escapeHTML(regions[selected[0]].label);subtitle.textContent=regions[selected[0]].subtitle}
  else{title.innerHTML=`${escapeHTML(regions[selected[0]].label)} x<br>${escapeHTML(regions[selected[1]].label)}`;subtitle.textContent="Overlapping experiences"}
  const matches=experiences.filter(e=>e.years.includes(currentYear)).filter(e=>selected.every(r=>e.regions.includes(r)));
  list.innerHTML=matches.length?matches.slice(0,6).map((e,i)=>`<button class="experience-card experience-card-button" type="button" data-experience-index="${i}"><div class="experience-title">${escapeHTML(e.title)}</div><div class="experience-meta"><span>${escapeHTML(e.role)}</span><span>${currentYear}</span></div></button>`).join(""):"";
  setupExperienceCards(matches.slice(0,6)); renderAwards();
}
function renderYears(){document.querySelectorAll(".years button").forEach(b=>b.classList.toggle("active",Number(b.dataset.year)===currentYear))}
function renderAwards(){
  const container=$("#awardsList"); if(!container)return;if(!selected.length){container.innerHTML="";return}
  const all=[...awards.offCampus,...awards.onCampus],matching=all.filter(a=>a.year===currentYear).filter(a=>selected.every(r=>a.regions.includes(r)));
  container.innerHTML=matching.length?matching.map((item,index)=>`<button class="award-card" type="button" data-award-index="${index}"><div class="award-year">'${String(item.year).slice(-2)}</div><div><div class="award-title">${escapeHTML(item.title)}</div><div class="award-result">${escapeHTML(item.award)}</div></div><div class="award-arrow">→</div></button>`).join(""):"";
  const setup=()=>{document.querySelectorAll(".award-card").forEach(card=>card.addEventListener("click",()=>{const a=matching[Number(card.dataset.awardIndex)];if(a)openAwardModal(a)}))}; setup();
}
function toggleRegion(id){
  const wasSelected=selected.includes(id);
  if(wasSelected)selected=selected.filter(r=>r!==id);else if(selected.length>=2)selected=[selected[1],id];else selected.push(id);
  render();
  if(tour.active){
    if(tour.step===1 && !wasSelected && selected.length===1){
      tour.firstRegion=id;
      // The brain moves for 1.25s when the selected panel opens.
      // Follow the real Motor Cortex point throughout that movement.
      const followStart=performance.now();
      const follow=()=>{
        if(!tour.active || tour.step!==2)return;
        positionSpotlight(tour.targets[2]);
        if(performance.now()-followStart<1400)requestAnimationFrame(follow);
      };
      setTimeout(()=>{
        advanceTour(2);
        requestAnimationFrame(follow);
      },20);
    }else if(tour.step===2 && !wasSelected && selected.length===2){
      setTimeout(()=>advanceTour(3),500);
    }
  }
}
function clearSelection(){selected=[];render()}
function render(){renderYears();renderBrainImage();renderConnections();renderLabels();renderPoints();renderPanel();if(tour.active)refreshTourVisuals()}

/* Guided tour */
function setTourCopy(step){
  const copy={
    1:{count:"01 / 03",title:"Start with the Prefrontal Cortex",text:"Click the highlighted Prefrontal Cortex to begin exploring the experiences connected to it.",status:"CLICK THE HIGHLIGHTED POINT"},
    2:{count:"02 / 03",title:"Connect it to the Motor Cortex",text:"Now click the highlighted Motor Cortex. The connection between the two regions will appear.",status:"CLICK MOTOR CORTEX"},
    3:{count:"03 / 03",title:"Continue to 2025",text:"Click 2025 in the timeline to see how your connectome develops.",status:"CLICK 2025"}
  }[step];
  $("#tutorialCount").textContent=copy.count;$("#tutorialTitle").textContent=copy.title;$("#tutorialText").textContent=copy.text;$("#tutorialStatus").textContent=copy.status;
  document.querySelectorAll(".tutorial-progress span").forEach((el,i)=>{el.classList.toggle("active",i+1===step);el.classList.toggle("done",i+1<step)})
}
function startTour(force=false){
  if(!force && false && localStorage.getItem(TOUR_KEY)==="complete")return;
  tour.active=true;tour.step=1;tour.firstRegion=null;currentYear=2024;clearSelection();$("#tutorialGuide").classList.remove("hidden");$("#tourComplete").classList.add("hidden");setTourCopy(1);refreshTourVisuals();
}
function finishTour(){tour.active=false;localStorage.setItem(TOUR_KEY,"complete");$("#tutorialGuide").classList.add("hidden");hideSpotlight();const toast=$("#tourComplete");toast.classList.remove("hidden");setTimeout(()=>toast.classList.add("hidden"),3200)}
function advanceTour(step){tour.step=step;setTourCopy(step);refreshTourVisuals()}
function hideSpotlight(){$("#tutorialSpotlight").classList.add("hidden");$("#tutorialTooltip").classList.add("hidden")}
function positionSpotlight(regionId){
  const point=document.querySelector(`.region-point[data-region="${regionId}"]`);
  if(!point)return;
  const rect=point.getBoundingClientRect();
  const spot=$("#tutorialSpotlight"),tip=$("#tutorialTooltip");
  spot.classList.remove("hidden");
  spot.style.width="76px";
  spot.style.height="76px";
  spot.style.borderRadius="50%";
  spot.style.left=`${rect.left+rect.width/2-38}px`;
  spot.style.top=`${rect.top+rect.height/2-38}px`;
  tip.classList.remove("hidden");
  tip.style.left=`${Math.min(window.innerWidth-420,Math.max(24,rect.left+rect.width/2-210))}px`;
  tip.style.top=`${Math.max(90,rect.top-155)}px`;
}
function positionYearSpotlight(){
  const active=document.querySelector('.years button[data-year="2025"]');
  if(!active)return;
  const rect=active.getBoundingClientRect(),spot=$("#tutorialSpotlight"),tip=$("#tutorialTooltip");
  spot.classList.remove("hidden");
  spot.style.width=`${rect.width+18}px`;
  spot.style.height=`${rect.height+18}px`;
  spot.style.borderRadius="28px";
  spot.style.left=`${rect.left-9}px`;
  spot.style.top=`${rect.top-9}px`;
  tip.classList.remove("hidden");
  tip.style.left=`${Math.min(window.innerWidth-420,Math.max(24,rect.left-30))}px`;
  tip.style.top=`${rect.bottom+24}px`;
}
function refreshTourVisuals(){
  if(!tour.active)return;
  if(tour.step===1){
    document.querySelectorAll(".region-point").forEach(p=>p.classList.toggle("tour-target",p.dataset.region===tour.targets[1]));
    $("#tooltipTitle").textContent="Click on a brain region";
    $("#tooltipText").textContent="To view activities related to the brain region & their crisp descriptions";
    positionSpotlight(tour.targets[1]);
  }else if(tour.step===2){
    document.querySelectorAll(".region-point").forEach(p=>p.classList.toggle("tour-target",p.dataset.region===tour.targets[2]));
    $("#tooltipTitle").textContent="Click on a second brain region";
    $("#tooltipText").textContent="To view activities related to both brain regions";
    positionSpotlight(tour.targets[2]);
  }else{
    document.querySelectorAll(".region-point").forEach(p=>p.classList.remove("tour-target"));
    $("#tooltipTitle").textContent="2025";
    $("#tooltipText").textContent="Click different years to see how my brain matures over time";
    positionYearSpotlight();
  }
}

/* Modals and navigation */
function setupExperienceCards(items){document.querySelectorAll(".experience-card-button").forEach(card=>card.addEventListener("click",()=>{const e=items[Number(card.dataset.experienceIndex)];if(e)openExperienceModal(e)}))}
const experienceModal=$("#experienceModal"),closeExperience=$("#closeExperience"),experienceModalTitle=$("#experienceModalTitle"),experienceModalRole=$("#experienceModalRole"),experienceModalDescription=$("#experienceModalDescription");
function openExperienceModal(e){experienceModalTitle.textContent=e.title;experienceModalRole.textContent=`${e.role} · ${currentYear}`;experienceModalDescription.textContent=e.description||`More information about ${e.title} can be added here.`;experienceModal.classList.remove("hidden")}
closeExperience?.addEventListener("click",()=>experienceModal.classList.add("hidden"));
const awardModal=$("#awardModal"),closeAward=$("#closeAward"),awardModalTitle=$("#awardModalTitle"),awardModalResult=$("#awardModalResult"),awardModalDescription=$("#awardModalDescription");
function openAwardModal(a){awardModalTitle.textContent=a.title;awardModalResult.textContent=a.award;awardModalDescription.textContent=a.description||`More information about ${a.title} can be added here.`;awardModal.classList.remove("hidden")}
closeAward?.addEventListener("click",()=>awardModal.classList.add("hidden"));
const aboutButton=$("#aboutBtn"),aboutModal=$("#aboutModal"),closeAbout=$("#closeAbout");aboutButton?.addEventListener("click",()=>aboutModal.classList.remove("hidden"));closeAbout?.addEventListener("click",()=>aboutModal.classList.add("hidden"));
$("#resumeBtn")?.addEventListener("click",()=>{window.location.href="https://www.canva.com/design/DAHOYsV-BJE/0QjwS0fXgU9kzbh9aUHKbQ/edit"});
$("#viewAllBtn")?.addEventListener("click",clearSelection);$("#tourBtn")?.addEventListener("click",()=>startTour(true));$("#skipTourBtn")?.addEventListener("click",finishTour);
document.querySelectorAll(".years button").forEach(button=>button.addEventListener("click",()=>{currentYear=Number(button.dataset.year);render();if(tour.active&&tour.step===3&&currentYear===2025){finishTour()}}));
document.querySelectorAll(".modal").forEach(modal=>modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.add("hidden")}));
window.addEventListener("resize",()=>{if(tour.active)refreshTourVisuals()});

function startIntro(){
  const INTRO_TIME=3000;
  const FADE_TIME=900;

  setTimeout(()=>{
    const intro=document.getElementById("intro");
    const site=document.getElementById("site");

    if(site) site.classList.remove("hidden");

    if(!intro){
      startTour(true);
      return;
    }

    intro.classList.add("intro-hide");

    setTimeout(()=>{
      intro.remove();
      startTour(true);
    }, FADE_TIME + 50);
  }, INTRO_TIME);
}
render();startIntro();
