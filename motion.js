/* Visual state follows the real microphone/speech status, not audio amplitude. */
(()=>{
 const hero=document.getElementById('hero'),status=document.getElementById('status');
 const wave=document.createElement('div');wave.className='wave';wave.setAttribute('aria-hidden','true');
 for(let i=0;i<23;i++){const bar=document.createElement('i');bar.style.setProperty('--n',i);wave.append(bar);}
 hero.querySelector('.orb').after(wave);
 for(let i=0;i<9;i++){const dot=document.createElement('span');dot.className='sparkle';dot.setAttribute('aria-hidden','true');dot.style.cssText=`--n:${i};left:${8+(i*31)%83}%;top:${12+(i*19)%70}%`;hero.append(dot);}
 const sync=()=>{const value=status.textContent;hero.classList.toggle('speaking',value==='Speaking');document.getElementById('badge').classList.toggle('busy',/Speaking|Listening|Starting/.test(value));};
 new MutationObserver(sync).observe(status,{childList:true,subtree:true,characterData:true});sync();
 const questions=document.getElementById('questions');const stagger=()=>Array.from(questions.children).forEach((b,i)=>b.style.setProperty('--order',i));
 new MutationObserver(stagger).observe(questions,{childList:true});stagger();
 document.addEventListener('visibilitychange',()=>document.body.classList.toggle('motion-paused',document.hidden));
})();
