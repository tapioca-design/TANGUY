window.AudioContext=window.AudioContext||window.webkitAudioContext;var TANGUY={synth:new AudioContext,octave_shift:0,osc1_master_pitch:440,osc2_master_pitch:444.18,key_down:!1,program:{name:"INITIALIZE",osc1_kbd:!0,osc1_coarse:1,osc1_saw:1,osc1_sqr:0,osc1_tri:0,osc1_sin:0,osc1_fm:0,osc2_kbd:!0,osc2_coarse:1,osc2_waveform:"sawtooth",osc2_detune:0,osc2_fine:0,osc2_shape:0,osc2_fm:0,noise_color:"white",osc1_mix:1,osc2_mix:1,noise_mix:0,filter_mode:"lp",cutoff:1,res:1e-4,filter_eg:0,filter_kbd:0,filter_attack:.008,filter_decay:.008,filter_sustain:0,filter_release:.008,vca_gain:0,vca_attack:1e-4,vca_decay:1e-4,vca_sustain:1,vca_release:1e-4,lfo_shape:"sine",lfo_rate:.1,lfo_pitch:0,lfo_filter:0,lfo_amp:0,delay_rate:0,delay:0,portamento_mode:"off",portamento:.01,mod:0,mod_direction:1}};TANGUY.save_program=function(){"use strict";var e=prompt("PATCH NAME");TANGUY.program.name=e,console.log("SAVE PROGRAM: "+JSON.stringify(TANGUY.program))},TANGUY.populate_programs=function(){"use strict";var e,t=["initialize","direct peon","eyeball bass","headcleaner","lettuce in","fake sync","rhinoceros","stylish bass","low bubble","cool wire","event deafener","bel homme","chattering","square wave bass","camembert","salut detroit","dusty pipes","architecture","faux set","plywood violin","black celebration","feedback drone","male voice","metal cello","papayawhip","ragamuffin","beatnik bongos","synth strings","perry on the beach","whompy bass","fuzzy","easy cure","rubberband","jet lag","abominable bassman","science fiction brains","bacon grease","shanty","bending branch","snarly bass","evening gardening","weedy rectangle","ozone","disco pabulum","cheap snare","beefy snare","sloppy bass","chhchhchhchh","round kick","fisherman","no pulse","the last voice","red river","crawler","synth king","showering dalek","former marine","galactic yawn","gamelan","razor view","dolphin sighting","pulse demon","hum","swamp monster","wistful pipes","invisible hand","panhandler bass","third member","hihat","maracas","wah wah"],r=[],a="";for(e=0;e<t.length;e+=1)r[e]=t[e].replace(/\s+/g,""),a+='<button value="'+r[e]+'">'+t[e]+"</button>";$("#program-select").append(a)},TANGUY.load_program=function(e){"use strict";var t=encodeURI("programs/")+e+".json";$.getJSON(decodeURI(t),function(e){return TANGUY.program=e,TANGUY.update_program()})},TANGUY.show_program=function(){"use strict";return $("#program-select").show(),$(document).one("click",TANGUY.hide_program),!1},TANGUY.hide_program=function(){"use strict";return $("#program-select").hide(),$("body").one("click","#program",TANGUY.show_program),!1},TANGUY.update_program=function(){"use strict";return TANGUY.update_osc1_coarse(),TANGUY.update_osc1_saw(),TANGUY.update_osc1_sqr(),TANGUY.update_osc1_tri(),TANGUY.update_osc1_sin(),TANGUY.update_osc1_fm(),TANGUY.update_osc2_coarse(),TANGUY.update_osc2_waveform(),TANGUY.update_osc2_detune(),TANGUY.update_osc2_fine(),TANGUY.update_osc2_shape(),TANGUY.update_osc2_fm(),TANGUY.update_noise_color(),TANGUY.update_osc1_mix(),TANGUY.update_osc2_mix(),TANGUY.update_noise_mix(),TANGUY.update_filter_mode(),TANGUY.update_cutoff(),TANGUY.update_resonance(),TANGUY.update_vca_gain(),TANGUY.update_lfo_shape(),TANGUY.update_lfo_rate(),TANGUY.calculate_lfo(),TANGUY.update_delay_rate(),TANGUY.update_delay_amt(),TANGUY.update_panel()},TANGUY.update_panel=function(){"use strict";switch($("#program-name").text(TANGUY.program.name),TANGUY.button.change(TANGUY.program.osc1_kbd?$("#osc1-on"):$("#osc1-off")),TANGUY.program.osc1_coarse){case.5:TANGUY.button.change($("#osc1-32"));break;case 1:TANGUY.button.change($("#osc1-16"));break;case 2:TANGUY.button.change($("#osc1-8"));break;case 4:TANGUY.button.change($("#osc1-4"))}switch($("#osc1-saw").val(TANGUY.program.osc1_saw),$("#osc1-sqr").val(TANGUY.program.osc1_sqr),$("#osc1-tri").val(TANGUY.program.osc1_tri),$("#osc1-sin").val(TANGUY.program.osc1_sin),$("#osc1-fm").val(TANGUY.program.osc1_fm),TANGUY.button.change(TANGUY.program.osc2_kbd?$("#osc2-on"):$("#osc2-off")),TANGUY.program.osc2_coarse){case.5:TANGUY.button.change($("#osc2-32"));break;case 1:TANGUY.button.change($("#osc2-16"));break;case 2:TANGUY.button.change($("#osc2-8"));break;case 4:TANGUY.button.change($("#osc2-4"))}switch(TANGUY.program.osc2_waveform){case"sawtooth":TANGUY.button.change($("#osc2-saw"));break;case"square":TANGUY.button.change($("#osc2-sqr"));break;case"triangle":TANGUY.button.change($("#osc2-tri"));break;case"sine":TANGUY.button.change($("#osc2-sin"))}switch($("#osc2-detune").val(TANGUY.program.osc2_detune),$("#osc2-fine").val(TANGUY.program.osc2_fine),$("#osc2-waveshape").val(TANGUY.program.osc2_shape),$("#osc2-fm").val(TANGUY.program.osc2_fm),TANGUY.program.noise_color){case"white":TANGUY.button.change($("#white-noise"));break;case"pink":TANGUY.button.change($("#pink-noise"));break;case"red":TANGUY.button.change($("#red-noise"));break;case"blue":TANGUY.button.change($("#blue-noise"));break;case"purple":TANGUY.button.change($("#purple-noise"))}switch($("#osc1-mix").val(TANGUY.program.osc1_mix),$("#osc2-mix").val(TANGUY.program.osc2_mix),$("#noise-mix").val(TANGUY.program.noise_mix),TANGUY.program.filter_mode){case"lp":TANGUY.button.change($("#filter-lp"));break;case"bp":TANGUY.button.change($("#filter-bp"));break;case"hp":TANGUY.button.change($("#filter-hp"));break;case"notch":TANGUY.button.change($("#filter-notch"));break;case"off":TANGUY.button.change($("#filter-off"))}switch($("#cutoff").val(TANGUY.program.cutoff),$("#resonance").val(TANGUY.program.res),$("#filter-eg-amt").val(TANGUY.program.filter_eg),$("#filter-kbd").val(TANGUY.program.filter_kbd),$("#filter-a").val(TANGUY.program.filter_attack),$("#filter-d").val(TANGUY.program.filter_decay),$("#filter-s").val(TANGUY.program.filter_sustain),$("#filter-r").val(TANGUY.program.filter_release),$("#vca-a").val(TANGUY.program.vca_attack),$("#vca-d").val(TANGUY.program.vca_decay),$("#vca-s").val(TANGUY.program.vca_sustain),$("#vca-r").val(TANGUY.program.vca_release),$("#vca-gain").val(TANGUY.program.vca_gain),TANGUY.program.lfo_shape){case"sine":TANGUY.button.change($("#lfo-sin"));break;case"triangle":TANGUY.button.change($("#lfo-tri"));break;case"ramp":TANGUY.button.change($("#lfo-rmp"));break;case"sawtooth":TANGUY.button.change($("#lfo-saw"));break;case"square":TANGUY.button.change($("#lfo-sqr"))}switch($("#lfo-rate").val(TANGUY.program.lfo_rate),$("#lfo-pitch").val(TANGUY.program.lfo_pitch),$("#lfo-filter").val(TANGUY.program.lfo_filter),$("#lfo-amp").val(TANGUY.program.lfo_amp),$("#delay-rate").val(TANGUY.program.delay_rate),$("#delay-amt").val(TANGUY.program.delay),TANGUY.program.portamento_mode){case"off":TANGUY.button.change($("#portamento-off"));break;case"linear":TANGUY.button.change($("#portamento-linear"));break;case"exponential":TANGUY.button.change($("#portamento-exponential"))}$("#portamento-amount").val(TANGUY.program.portamento),$("#mod-amount").val(TANGUY.program.mod)},TANGUY.shift_octave=function(e){"use strict";var t=[$("#octave-minus-2"),$("#octave-minus-1"),$("#octave-plus-0"),$("#octave-plus-1"),$("#octave-plus-2")];e>0&&TANGUY.octave_shift<2?(TANGUY.octave_shift+=1,t[TANGUY.octave_shift+2].addClass("lit"),t[TANGUY.octave_shift+1].removeClass("lit")):0>e&&TANGUY.octave_shift>-2&&(TANGUY.octave_shift-=1,t[TANGUY.octave_shift+2].addClass("lit"),t[TANGUY.octave_shift+3].removeClass("lit"))},TANGUY.calculate_pitch=function(e,t){"use strict";var r,a=1200*(TANGUY.octave_shift+e)+t,n=1200*(TANGUY.octave_shift+e)+(t+TANGUY.program.osc2_detune),c=(4800-a)*TANGUY.program.filter_kbd,s=[TANGUY.osc1_saw,TANGUY.osc1_sqr,TANGUY.osc1_tri,TANGUY.osc1_sin],o=function(){if(TANGUY.program.osc1_kbd===!0)for(r=0;4>r;r+=1)s[r].detune.setValueAtTime(a,TANGUY.synth.currentTime);TANGUY.program.osc2_kbd===!0&&TANGUY.osc2.detune.setValueAtTime(n,TANGUY.synth.currentTime)},T=function(){if(TANGUY.program.osc1_kbd===!0)for(r=0;4>r;r+=1)s[r].detune.linearRampToValueAtTime(a,TANGUY.synth.currentTime+TANGUY.program.portamento);TANGUY.program.osc2_kbd===!0&&TANGUY.osc2.detune.linearRampToValueAtTime(n,TANGUY.synth.currentTime+TANGUY.program.portamento)},i=function(){if(TANGUY.program.osc1_kbd===!0)for(r=0;4>r;r+=1)s[r].detune.setTargetAtTime(a,TANGUY.synth.currentTime,TANGUY.program.portamento/5);TANGUY.program.osc2_kbd===!0&&TANGUY.osc2.detune.setTargetAtTime(n,TANGUY.synth.currentTime,TANGUY.program.portamento/5)};switch(TANGUY.osc1_pitch=a,TANGUY.osc2_pitch=n,TANGUY.program.portamento_mode){case"off":o();break;case"linear":T();break;case"exponential":i()}switch(TANGUY.program.filter_mode){case"lp":TANGUY.lp_filter1.detune.setValueAtTime(c,TANGUY.synth.currentTime),TANGUY.lp_filter2.detune.setValueAtTime(c/2,TANGUY.synth.currentTime);break;case"bp":TANGUY.bp_filter1.detune.setValueAtTime(c,TANGUY.synth.currentTime),TANGUY.bp_filter2.detune.setValueAtTime(c,TANGUY.synth.currentTime),TANGUY.bp_filter3.detune.setValueAtTime(c,TANGUY.synth.currentTime);break;case"hp":TANGUY.hp_filter1.detune.setValueAtTime(c,TANGUY.synth.currentTime),TANGUY.hp_filter2.detune.setValueAtTime(c,TANGUY.synth.currentTime);break;case"notch":TANGUY.notch1.detune.setValueAtTime(c,TANGUY.synth.currentTime),TANGUY.notch2.detune.setValueAtTime(c,TANGUY.synth.currentTime),TANGUY.notch3.detune.setValueAtTime(c,TANGUY.synth.currentTime);break;case"off":}},TANGUY.gate_on=function(){"use strict";var e=TANGUY.program.cutoff*TANGUY.program.cutoff*22030+20,t=TANGUY.program.filter_eg*(22050-e)*Math.abs(TANGUY.program.filter_eg)+e,r=TANGUY.synth.currentTime+TANGUY.program.filter_attack,a=t*TANGUY.program.filter_sustain*TANGUY.program.filter_sustain+e,n=TANGUY.synth.currentTime+TANGUY.program.vca_attack;switch(TANGUY.program.filter_mode){case"lp":TANGUY.lp_filter1.frequency.setValueAtTime(e,TANGUY.synth.currentTime),TANGUY.lp_filter2.frequency.setValueAtTime(e/2,TANGUY.synth.currentTime),TANGUY.lp_filter1.frequency.linearRampToValueAtTime(t,TANGUY.synth.currentTime+TANGUY.program.filter_attack),TANGUY.lp_filter2.frequency.linearRampToValueAtTime(t/2,TANGUY.synth.currentTime+TANGUY.program.filter_attack),TANGUY.lp_filter1.frequency.setTargetAtTime(a,r,TANGUY.program.filter_decay),TANGUY.lp_filter2.frequency.setTargetAtTime(a/2,r,TANGUY.program.filter_decay);break;case"bp":TANGUY.bp_filter1.frequency.setValueAtTime(e,TANGUY.synth.currentTime),TANGUY.bp_filter2.frequency.setValueAtTime(.9*e,TANGUY.synth.currentTime),TANGUY.bp_filter3.frequency.setValueAtTime(1.1*e,TANGUY.synth.currentTime),TANGUY.bp_filter1.frequency.linearRampToValueAtTime(t,TANGUY.synth.currentTime+TANGUY.program.filter_attack),TANGUY.bp_filter2.frequency.linearRampToValueAtTime(.9*t,TANGUY.synth.currentTime+TANGUY.program.filter_attack),TANGUY.bp_filter3.frequency.linearRampToValueAtTime(1.1*t,TANGUY.synth.currentTime+TANGUY.program.filter_attack),TANGUY.bp_filter1.frequency.setTargetAtTime(a,r,TANGUY.program.filter_decay),TANGUY.bp_filter2.frequency.setTargetAtTime(.9*a,r,TANGUY.program.filter_decay),TANGUY.bp_filter3.frequency.setTargetAtTime(1.1*a,r,TANGUY.program.filter_decay);break;case"hp":TANGUY.hp_filter1.frequency.setValueAtTime(e,TANGUY.synth.currentTime),TANGUY.hp_filter2.frequency.setValueAtTime(e,TANGUY.synth.currentTime),TANGUY.hp_filter1.frequency.linearRampToValueAtTime(t,TANGUY.synth.currentTime+TANGUY.program.filter_attack),TANGUY.hp_filter2.frequency.linearRampToValueAtTime(t,TANGUY.synth.currentTime+TANGUY.program.filter_attack),TANGUY.hp_filter1.frequency.setTargetAtTime(a,r,TANGUY.program.filter_decay),TANGUY.hp_filter2.frequency.setTargetAtTime(a,r,TANGUY.program.filter_decay);break;case"notch":TANGUY.notch1.frequency.setValueAtTime(e,TANGUY.synth.currentTime),TANGUY.notch2.frequency.setValueAtTime(.9*e,TANGUY.synth.currentTime),TANGUY.notch3.frequency.setValueAtTime(1.1*e,TANGUY.synth.currentTime),TANGUY.notch1.frequency.linearRampToValueAtTime(t,TANGUY.synth.currentTime+TANGUY.program.filter_attack),TANGUY.notch2.frequency.linearRampToValueAtTime(.9*t,TANGUY.synth.currentTime+TANGUY.program.filter_attack),TANGUY.notch3.frequency.linearRampToValueAtTime(1.1*t,TANGUY.synth.currentTime+TANGUY.program.filter_attack),TANGUY.notch1.frequency.setTargetAtTime(a,r,TANGUY.program.filter_decay),TANGUY.notch2.frequency.setTargetAtTime(.9*a,r,TANGUY.program.filter_decay),TANGUY.notch3.frequency.setTargetAtTime(1.1*a,r,TANGUY.program.filter_decay)}TANGUY.calculate_pitch(parseFloat(this.getAttribute("data-keyboard-position")),parseFloat(this.getAttribute("data-note-value"))),TANGUY.vca.gain.setValueAtTime(TANGUY.program.vca_gain,TANGUY.synth.currentTime),TANGUY.vca.gain.linearRampToValueAtTime(1,TANGUY.synth.currentTime+TANGUY.program.vca_attack),TANGUY.vca.gain.setTargetAtTime(TANGUY.program.vca_sustain+TANGUY.program.vca_gain,n,TANGUY.program.vca_decay)},TANGUY.gate_off=function(){"use strict";var e,t=TANGUY.program.cutoff*TANGUY.program.cutoff*22030+20,r=TANGUY.vca.gain.value;switch(TANGUY.program.filter_mode){case"lp":e=TANGUY.lp_filter1.frequency.value,TANGUY.lp_filter1.frequency.cancelScheduledValues(TANGUY.synth.currentTime),TANGUY.lp_filter2.frequency.cancelScheduledValues(TANGUY.synth.currentTime),TANGUY.lp_filter1.frequency.setValueAtTime(e,TANGUY.synth.currentTime),TANGUY.lp_filter2.frequency.setValueAtTime(e/2,TANGUY.synth.currentTime),TANGUY.lp_filter1.frequency.setTargetAtTime(t,TANGUY.synth.currentTime,TANGUY.program.filter_release),TANGUY.lp_filter2.frequency.setTargetAtTime(t/2,TANGUY.synth.currentTime,TANGUY.program.filter_release);break;case"bp":e=TANGUY.bp_filter1.frequency.value,TANGUY.bp_filter1.frequency.cancelScheduledValues(TANGUY.synth.currentTime),TANGUY.bp_filter2.frequency.cancelScheduledValues(TANGUY.synth.currentTime),TANGUY.bp_filter3.frequency.cancelScheduledValues(TANGUY.synth.currentTime),TANGUY.bp_filter1.frequency.setValueAtTime(e,TANGUY.synth.currentTime),TANGUY.bp_filter2.frequency.setValueAtTime(.9*e,TANGUY.synth.currentTime),TANGUY.bp_filter3.frequency.setValueAtTime(1.1*e,TANGUY.synth.currentTime),TANGUY.bp_filter1.frequency.setTargetAtTime(t,TANGUY.synth.currentTime,TANGUY.program.filter_release),TANGUY.bp_filter2.frequency.setTargetAtTime(.9*t,TANGUY.synth.currentTime,TANGUY.program.filter_release),TANGUY.bp_filter3.frequency.setTargetAtTime(1.1*t,TANGUY.synth.currentTime,TANGUY.program.filter_release);break;case"hp":e=TANGUY.hp_filter1.frequency.value,TANGUY.hp_filter1.frequency.cancelScheduledValues(TANGUY.synth.currentTime),TANGUY.hp_filter2.frequency.cancelScheduledValues(TANGUY.synth.currentTime),TANGUY.hp_filter1.frequency.setValueAtTime(e,TANGUY.synth.currentTime),TANGUY.hp_filter2.frequency.setValueAtTime(e,TANGUY.synth.currentTime),TANGUY.hp_filter1.frequency.setTargetAtTime(t,TANGUY.synth.currentTime,TANGUY.program.filter_release),TANGUY.hp_filter2.frequency.setTargetAtTime(t,TANGUY.synth.currentTime,TANGUY.program.filter_release);break;case"notch":e=TANGUY.notch1.frequency.value,TANGUY.notch1.frequency.cancelScheduledValues(TANGUY.synth.currentTime),TANGUY.notch2.frequency.cancelScheduledValues(TANGUY.synth.currentTime),TANGUY.notch3.frequency.cancelScheduledValues(TANGUY.synth.currentTime),TANGUY.notch1.frequency.setValueAtTime(e,TANGUY.synth.currentTime),TANGUY.notch2.frequency.setValueAtTime(.9*e,TANGUY.synth.currentTime),TANGUY.notch3.frequency.setValueAtTime(1.1*e,TANGUY.synth.currentTime),TANGUY.notch1.frequency.setTargetAtTime(t,TANGUY.synth.currentTime,TANGUY.program.filter_release),TANGUY.notch2.frequency.setTargetAtTime(.9*t,TANGUY.synth.currentTime,TANGUY.program.filter_release),TANGUY.notch3.frequency.setTargetAtTime(1.1*t,TANGUY.synth.currentTime,TANGUY.program.filter_release)}TANGUY.vca.gain.cancelScheduledValues(TANGUY.synth.currentTime),TANGUY.vca.gain.setValueAtTime(r,TANGUY.synth.currentTime),TANGUY.vca.gain.setTargetAtTime(TANGUY.program.vca_gain,TANGUY.synth.currentTime,TANGUY.program.vca_release)},TANGUY.build_synth=function(){"use strict";var e,t,r,a,n,c,s,o,T,i,A;for(TANGUY.delay1_vca=TANGUY.synth.createGain(),TANGUY.delay2_vca=TANGUY.synth.createGain(),TANGUY.delay3_vca=TANGUY.synth.createGain(),TANGUY.delay4_vca=TANGUY.synth.createGain(),TANGUY.delay1_vca.gain.value=0,TANGUY.delay2_vca.gain.value=0,TANGUY.delay3_vca.gain.value=0,TANGUY.delay4_vca.gain.value=0,TANGUY.delay1_vca.connect(TANGUY.synth.destination),TANGUY.delay2_vca.connect(TANGUY.synth.destination),TANGUY.delay3_vca.connect(TANGUY.synth.destination),TANGUY.delay4_vca.connect(TANGUY.synth.destination),TANGUY.delay1=TANGUY.synth.createDelay(2),TANGUY.delay2=TANGUY.synth.createDelay(2),TANGUY.delay3=TANGUY.synth.createDelay(2),TANGUY.delay4=TANGUY.synth.createDelay(2),TANGUY.delay1.connect(TANGUY.delay1_vca),TANGUY.delay2.connect(TANGUY.delay2_vca),TANGUY.delay3.connect(TANGUY.delay3_vca),TANGUY.delay4.connect(TANGUY.delay4_vca),TANGUY.delay1_vca.connect(TANGUY.delay2),TANGUY.delay2_vca.connect(TANGUY.delay3),TANGUY.delay3_vca.connect(TANGUY.delay4),TANGUY.vca=TANGUY.synth.createGain(),TANGUY.vca.gain.value=0,TANGUY.vca.connect(TANGUY.delay1),TANGUY.vca.connect(TANGUY.synth.destination),TANGUY.lp_filter1=TANGUY.synth.createBiquadFilter(),TANGUY.lp_filter2=TANGUY.synth.createBiquadFilter(),TANGUY.lp_filter1.type="lowpass",TANGUY.lp_filter2.type="lowpass",TANGUY.lp_filter1.connect(TANGUY.lp_filter2),TANGUY.lp_filter2.connect(TANGUY.vca),TANGUY.bp_filter1=TANGUY.synth.createBiquadFilter(),TANGUY.bp_filter2=TANGUY.synth.createBiquadFilter(),TANGUY.bp_filter3=TANGUY.synth.createBiquadFilter(),TANGUY.bp_filter1.type="bandpass",TANGUY.bp_filter2.type="peaking",TANGUY.bp_filter3.type="peaking",TANGUY.bp_filter1.Q.value=2,TANGUY.bp_filter2.Q.value=3,TANGUY.bp_filter3.Q.value=3,TANGUY.bp_filter1.connect(TANGUY.bp_filter2),TANGUY.bp_filter2.connect(TANGUY.bp_filter3),TANGUY.bp_filter3.connect(TANGUY.vca),TANGUY.hp_filter1=TANGUY.synth.createBiquadFilter(),TANGUY.hp_filter2=TANGUY.synth.createBiquadFilter(),TANGUY.hp_filter1.type="highpass",TANGUY.hp_filter2.type="highpass",TANGUY.hp_filter1.connect(TANGUY.hp_filter2),TANGUY.hp_filter2.connect(TANGUY.vca),TANGUY.notch1=TANGUY.synth.createBiquadFilter(),TANGUY.notch2=TANGUY.synth.createBiquadFilter(),TANGUY.notch3=TANGUY.synth.createBiquadFilter(),TANGUY.notch1.type="notch",TANGUY.notch2.type="peaking",TANGUY.notch3.type="peaking",TANGUY.notch1.Q.value=2,TANGUY.notch2.Q.value=3,TANGUY.notch3.Q.value=3,TANGUY.notch1.connect(TANGUY.notch2),TANGUY.notch2.connect(TANGUY.notch3),TANGUY.notch3.connect(TANGUY.vca),TANGUY.mixer=TANGUY.synth.createGain(),TANGUY.osc1_vca=TANGUY.synth.createGain(),TANGUY.osc2_vca=TANGUY.synth.createGain(),TANGUY.noise_vca=TANGUY.synth.createGain(),TANGUY.mixer.gain.value=1,TANGUY.mixer.connect(TANGUY.lp_filter1),TANGUY.osc1_vca.connect(TANGUY.mixer),TANGUY.osc2_vca.connect(TANGUY.mixer),TANGUY.noise_vca.connect(TANGUY.mixer),TANGUY.osc1_saw_vca=TANGUY.synth.createGain(),TANGUY.osc1_sqr_vca=TANGUY.synth.createGain(),TANGUY.osc1_tri_vca=TANGUY.synth.createGain(),TANGUY.osc1_sin_vca=TANGUY.synth.createGain(),TANGUY.osc1_saw_vca.connect(TANGUY.osc1_vca),TANGUY.osc1_sqr_vca.connect(TANGUY.osc1_vca),TANGUY.osc1_tri_vca.connect(TANGUY.osc1_vca),TANGUY.osc1_sin_vca.connect(TANGUY.osc1_vca),TANGUY.osc1_saw=TANGUY.synth.createOscillator(),TANGUY.osc1_sqr=TANGUY.synth.createOscillator(),TANGUY.osc1_tri=TANGUY.synth.createOscillator(),TANGUY.osc1_sin=TANGUY.synth.createOscillator(),TANGUY.osc1_saw.type="sawtooth",TANGUY.osc1_sqr.type="square",TANGUY.osc1_tri.type="triangle",TANGUY.osc1_sin.type="sine",TANGUY.osc1_saw.start(0),TANGUY.osc1_sqr.start(0),TANGUY.osc1_tri.start(0),TANGUY.osc1_sin.start(0),TANGUY.osc1_saw.connect(TANGUY.osc1_saw_vca),TANGUY.osc1_sqr.connect(TANGUY.osc1_sqr_vca),TANGUY.osc1_tri.connect(TANGUY.osc1_tri_vca),TANGUY.osc1_sin.connect(TANGUY.osc1_sin_vca),TANGUY.osc1_fm_vca=TANGUY.synth.createGain(),TANGUY.osc1_fm_vca.connect(TANGUY.osc1_saw.frequency),TANGUY.osc1_fm_vca.connect(TANGUY.osc1_sqr.frequency),TANGUY.osc1_fm_vca.connect(TANGUY.osc1_tri.frequency),TANGUY.osc1_fm_vca.connect(TANGUY.osc1_sin.frequency),TANGUY.waveshaper=TANGUY.synth.createWaveShaper(),TANGUY.waveshaper.connect(TANGUY.osc2_vca),TANGUY.osc2=TANGUY.synth.createOscillator(),TANGUY.osc2.start(0),TANGUY.osc2.connect(TANGUY.osc1_fm_vca),TANGUY.osc2.connect(TANGUY.waveshaper),TANGUY.osc2_fm_vca=TANGUY.synth.createGain(),TANGUY.osc2_fm_vca.connect(TANGUY.osc2.frequency),TANGUY.osc1_sin_vca.connect(TANGUY.osc2_fm_vca),TANGUY.pink_noise_filter1=TANGUY.synth.createBiquadFilter(),TANGUY.pink_noise_filter2=TANGUY.synth.createBiquadFilter(),TANGUY.pink_noise_filter1.type="lowpass",TANGUY.pink_noise_filter2.type="lowpass",TANGUY.pink_noise_filter1.frequency.value=8e3,TANGUY.pink_noise_filter2.frequency.value=4e3,TANGUY.pink_noise_filter1.Q.value=1,TANGUY.pink_noise_filter2.Q.value=1,TANGUY.pink_noise_filter1.connect(TANGUY.pink_noise_filter2),TANGUY.pink_noise_filter2.connect(TANGUY.noise_vca),TANGUY.empty_white_noise_buffer=TANGUY.synth.createBuffer(1,1,TANGUY.synth.sampleRate),TANGUY.empty_pink_noise_buffer=TANGUY.synth.createBuffer(1,1,TANGUY.synth.sampleRate),TANGUY.empty_red_noise_buffer=TANGUY.synth.createBuffer(1,1,TANGUY.synth.sampleRate),TANGUY.empty_blue_noise_buffer=TANGUY.synth.createBuffer(1,1,TANGUY.synth.sampleRate),TANGUY.empty_purple_noise_buffer=TANGUY.synth.createBuffer(1,1,TANGUY.synth.sampleRate),TANGUY.white_noise_buffer=TANGUY.synth.createBuffer(1,88200,TANGUY.synth.sampleRate),TANGUY.pink_noise_buffer=TANGUY.synth.createBuffer(1,44100,TANGUY.synth.sampleRate),TANGUY.red_noise_buffer=TANGUY.synth.createBuffer(1,44100,TANGUY.synth.sampleRate),TANGUY.blue_noise_buffer=TANGUY.synth.createBuffer(1,44100,TANGUY.synth.sampleRate),TANGUY.purple_noise_buffer=TANGUY.synth.createBuffer(1,44100,TANGUY.synth.sampleRate),TANGUY.white_noise=TANGUY.synth.createBufferSource(),TANGUY.pink_noise=TANGUY.synth.createBufferSource(),TANGUY.red_noise=TANGUY.synth.createBufferSource(),TANGUY.blue_noise=TANGUY.synth.createBufferSource(),TANGUY.purple_noise=TANGUY.synth.createBufferSource(),TANGUY.white_noise.start(0),TANGUY.pink_noise.start(0),TANGUY.red_noise.start(0),TANGUY.blue_noise.start(0),TANGUY.purple_noise.start(0),TANGUY.white_noise.loop=!0,TANGUY.pink_noise.loop=!0,TANGUY.red_noise.loop=!0,TANGUY.blue_noise.loop=!0,TANGUY.purple_noise.loop=!0,TANGUY.white_noise.buffer=TANGUY.white_noise_buffer,TANGUY.pink_noise.buffer=TANGUY.empty_pink_noise_buffer,TANGUY.red_noise.buffer=TANGUY.empty_red_noise_buffer,TANGUY.blue_noise.buffer=TANGUY.empty_blue_noise_buffer,TANGUY.purple_noise.buffer=TANGUY.empty_purple_noise_buffer,TANGUY.white_noise.connect(TANGUY.noise_vca),TANGUY.pink_noise.connect(TANGUY.pink_noise_filter1),TANGUY.red_noise.connect(TANGUY.noise_vca),TANGUY.blue_noise.connect(TANGUY.noise_vca),TANGUY.purple_noise.connect(TANGUY.noise_vca),e=TANGUY.white_noise_buffer.getChannelData(0),i=0;88200>i;i+=1)e[i]=2*Math.random()-1;for(t=TANGUY.pink_noise_buffer.getChannelData(0),i=0;44100>i;i+=1)for(t[i]=Math.floor((1980*Math.random()+20)/1e3),c=t[i],i+=1,A=0;4>A;A+=1)t[i]=Math.abs(c),i+=1,t[i]=.5*Math.abs(c);for(r=TANGUY.red_noise_buffer.getChannelData(0),i=0;44100>i;i+=1)for(r[i]=-1*Math.random()+2,s=r[i],i+=1,A=0;237>A;A+=1)r[i]=.5*s,i+=1;for(a=TANGUY.blue_noise_buffer.getChannelData(0),i=0;44100>i;i+=1)for(a[i]=-1*Math.random()+1,o=a[i],i+=1,A=0;137>A;A+=1)a[i]=.5*o,i+=1;for(n=TANGUY.purple_noise_buffer.getChannelData(0),i=0;44100>i;i+=1)for(n[i]=-1*Math.random()+1,T=n[i],i+=1,A=0;172>A;A+=1)n[i]=.75*T,i+=1;TANGUY.lfo_pitch_vca=TANGUY.synth.createGain(),TANGUY.lfo_filter_vca=TANGUY.synth.createGain(),TANGUY.lfo_amp_vca=TANGUY.synth.createGain(),TANGUY.lfo_pitch_vca.connect(TANGUY.osc1_saw.frequency),TANGUY.lfo_pitch_vca.connect(TANGUY.osc1_sqr.frequency),TANGUY.lfo_pitch_vca.connect(TANGUY.osc1_tri.frequency),TANGUY.lfo_pitch_vca.connect(TANGUY.osc1_sin.frequency),TANGUY.lfo_pitch_vca.connect(TANGUY.osc2.frequency),TANGUY.lfo_filter_vca.connect(TANGUY.lp_filter1.frequency),TANGUY.lfo_amp_vca.connect(TANGUY.mixer.gain),TANGUY.lfo=TANGUY.synth.createOscillator(),TANGUY.lfo.start(0),TANGUY.lfo.connect(TANGUY.lfo_pitch_vca),TANGUY.lfo.connect(TANGUY.lfo_filter_vca),TANGUY.lfo.connect(TANGUY.lfo_amp_vca)},$(document).ready(function(){"use strict";TANGUY.build_synth(),TANGUY.load_program("initialize"),TANGUY.populate_programs(),$("body").one("click","#program",TANGUY.show_program),$("#program-select").on("click","button",function(){TANGUY.load_program(this.value)}),$("#octave-shift").on("click","button",function(){return TANGUY.shift_octave(this.getAttribute("data-octave-shift"))}),$("#osc1-kbd, #osc1-coarse, #osc2-kbd, #osc2-coarse, #osc2-waveform, #noise-color, #filter-mode, #lfo-shape, #portamento-mode").on("change","input",TANGUY.button.touch),$("#delay, #filter-eg, #vca-eg, #mixer, #filter, #mod-wheel").on("mousedown","input",TANGUY.slider.grab),$("#osc1, #osc2, #lfo").on("mousedown","input.vertical-slider",TANGUY.slider.grab),$("#portamento").on("mousedown","input.horizontal-slider",TANGUY.slider.grab)}),TANGUY.update_osc1_coarse=function(){"use strict";var e,t=[TANGUY.osc1_saw,TANGUY.osc1_sqr,TANGUY.osc1_tri,TANGUY.osc1_sin];for(e=0;4>e;e+=1)t[e].frequency.setValueAtTime(440*TANGUY.program.osc1_coarse,TANGUY.synth.currentTime)},TANGUY.update_osc1_saw=function(){"use strict";return TANGUY.osc1_saw_vca.gain.setValueAtTime(TANGUY.program.osc1_saw*TANGUY.program.osc1_saw,TANGUY.synth.currentTime)},TANGUY.update_osc1_sqr=function(){"use strict";return TANGUY.osc1_sqr_vca.gain.setValueAtTime(TANGUY.program.osc1_sqr*TANGUY.program.osc1_sqr*-1,TANGUY.synth.currentTime)},TANGUY.update_osc1_tri=function(){"use strict";return TANGUY.osc1_tri_vca.gain.setValueAtTime(TANGUY.program.osc1_tri*TANGUY.program.osc1_tri,TANGUY.synth.currentTime)},TANGUY.update_osc1_sin=function(){"use strict";return TANGUY.osc1_sin_vca.gain.setValueAtTime(TANGUY.program.osc1_sin*TANGUY.program.osc1_sin,TANGUY.synth.currentTime)},TANGUY.update_osc1_fm=function(){"use strict";return TANGUY.osc1_fm_vca.gain.setValueAtTime(TANGUY.program.osc1_fm*TANGUY.program.osc1_fm*24e3,TANGUY.synth.currentTime)},TANGUY.update_osc2_coarse=function(){"use strict";return TANGUY.osc2.frequency.setValueAtTime(TANGUY.osc2_master_pitch*TANGUY.program.osc2_coarse,TANGUY.synth.currentTime)},TANGUY.update_osc2_waveform=function(){"use strict";TANGUY.osc2.type=TANGUY.program.osc2_waveform},TANGUY.update_osc2_detune=function(){"use strict";void 0===TANGUY.osc2_pitch&&(TANGUY.osc2_pitch=TANGUY.osc2_master_pitch),TANGUY.osc2.detune.setValueAtTime(TANGUY.osc2_pitch+TANGUY.program.osc2_detune,TANGUY.synth.currentTime)},TANGUY.update_osc2_fine=function(){"use strict";return TANGUY.osc2.frequency.setValueAtTime(TANGUY.osc2_master_pitch*TANGUY.program.osc2_coarse+TANGUY.program.osc2_fine,TANGUY.synth.currentTime)},TANGUY.update_osc2_shape=function(){"use strict";var e=TANGUY.program.osc2_shape;TANGUY.waveshaper.curve=e>0?new Float32Array([1.6*e,-2.5*e,-1.2*e,-2.4*e,-1.6*e,-3.2*e,6.4*e,-3.2*e]):null},TANGUY.update_osc2_fm=function(){"use strict";return TANGUY.osc2_fm_vca.gain.setValueAtTime(TANGUY.program.osc2_fm*TANGUY.program.osc2_fm*24e3,TANGUY.synth.currentTime)},TANGUY.update_noise_color=function(){"use strict";switch(TANGUY.program.noise_color){case"white":TANGUY.white_noise.buffer=TANGUY.white_noise_buffer,TANGUY.pink_noise.buffer=TANGUY.empty_pink_noise_buffer,TANGUY.red_noise.buffer=TANGUY.empty_red_noise_buffer,TANGUY.blue_noise.buffer=TANGUY.empty_blue_noise_buffer,TANGUY.purple_noise.buffer=TANGUY.empty_purple_noise_buffer;break;case"pink":TANGUY.pink_noise.buffer=TANGUY.pink_noise_buffer,TANGUY.white_noise.buffer=TANGUY.empty_white_noise_buffer,TANGUY.red_noise.buffer=TANGUY.empty_red_noise_buffer,TANGUY.blue_noise.buffer=TANGUY.empty_blue_noise_buffer,TANGUY.purple_noise.buffer=TANGUY.empty_purple_noise_buffer;break;case"red":TANGUY.red_noise.buffer=TANGUY.red_noise_buffer,TANGUY.white_noise.buffer=TANGUY.empty_white_noise_buffer,TANGUY.pink_noise.buffer=TANGUY.empty_pink_noise_buffer,TANGUY.blue_noise.buffer=TANGUY.empty_blue_noise_buffer,TANGUY.purple_noise.buffer=TANGUY.empty_purple_noise_buffer;break;case"blue":TANGUY.blue_noise.buffer=TANGUY.blue_noise_buffer,TANGUY.white_noise.buffer=TANGUY.empty_white_noise_buffer,TANGUY.pink_noise.buffer=TANGUY.empty_pink_noise_buffer,TANGUY.red_noise.buffer=TANGUY.empty_red_noise_buffer,TANGUY.purple_noise.buffer=TANGUY.empty_purple_noise_buffer;break;case"purple":TANGUY.purple_noise.buffer=TANGUY.purple_noise_buffer,TANGUY.white_noise.buffer=TANGUY.empty_white_noise_buffer,TANGUY.pink_noise.buffer=TANGUY.empty_pink_noise_buffer,TANGUY.red_noise.buffer=TANGUY.empty_red_noise_buffer,TANGUY.blue_noise.buffer=TANGUY.empty_blue_noise_buffer}},TANGUY.update_lfo_shape=function(){"use strict";switch(TANGUY.program.lfo_shape){case"sawtooth":TANGUY.lfo.type=TANGUY.program.lfo_shape,TANGUY.program.mod_direction=-1;break;case"ramp":TANGUY.lfo.type="sawtooth",TANGUY.program.mod_direction=1;break;case"sine":case"triangle":case"square":TANGUY.lfo.type=TANGUY.program.lfo_shape,TANGUY.program.mod_direction=1}return TANGUY.calculate_lfo()},TANGUY.update_lfo_rate=function(){"use strict";return TANGUY.lfo.frequency.setValueAtTime(TANGUY.program.lfo_rate*TANGUY.program.lfo_rate*100,TANGUY.synth.currentTime)},TANGUY.update_lfo_pitch=function(){"use strict";return TANGUY.lfo_pitch_vca.gain.setValueAtTime(TANGUY.program.lfo_pitch*TANGUY.program.mod*TANGUY.program.mod_direction,TANGUY.synth.currentTime)},TANGUY.update_lfo_filter=function(){"use strict";return TANGUY.lfo_filter_vca.gain.setValueAtTime(TANGUY.program.lfo_filter*TANGUY.program.mod*TANGUY.program.mod_direction,TANGUY.synth.currentTime)},TANGUY.update_lfo_amp=function(){"use strict";return TANGUY.lfo_amp_vca.gain.setValueAtTime(TANGUY.program.lfo_amp*TANGUY.program.mod*TANGUY.program.mod_direction,TANGUY.synth.currentTime)},TANGUY.update_delay_rate=function(){"use strict";var e,t=[TANGUY.delay1,TANGUY.delay2,TANGUY.delay3,TANGUY.delay4];for(e=0;4>e;e+=1)t[e].delayTime.setValueAtTime(2*TANGUY.program.delay_rate,TANGUY.synth.currentTime)},TANGUY.update_delay_amt=function(){"use strict";var e,t=[TANGUY.delay1_vca,TANGUY.delay2_vca,TANGUY.delay3_vca,TANGUY.delay4_vca];for(e=0;4>e;e+=1)t[e].gain.setValueAtTime(TANGUY.program.delay*TANGUY.program.delay,TANGUY.synth.currentTime)},TANGUY.update_osc1_mix=function(){"use strict";return TANGUY.osc1_vca.gain.setValueAtTime(TANGUY.program.osc1_mix*TANGUY.program.osc1_mix,TANGUY.synth.currentTime)},TANGUY.update_osc2_mix=function(){"use strict";return TANGUY.osc2_vca.gain.setValueAtTime(TANGUY.program.osc2_mix*TANGUY.program.osc2_mix,TANGUY.synth.currentTime)},TANGUY.update_noise_mix=function(){"use strict";return TANGUY.noise_vca.gain.setValueAtTime(TANGUY.program.noise_mix*TANGUY.program.noise_mix,TANGUY.synth.currentTime)},TANGUY.update_filter_mode=function(){"use strict";switch(TANGUY.mixer.disconnect(),TANGUY.lfo_filter_vca.disconnect(),TANGUY.program.filter_mode){case"lp":TANGUY.mixer.connect(TANGUY.lp_filter1),TANGUY.lfo_filter_vca.connect(TANGUY.lp_filter1.frequency),TANGUY.lfo_filter_vca.connect(TANGUY.lp_filter2.frequency);break;case"bp":TANGUY.mixer.connect(TANGUY.bp_filter1),TANGUY.lfo_filter_vca.connect(TANGUY.bp_filter1.frequency),TANGUY.lfo_filter_vca.connect(TANGUY.bp_filter2.frequency),TANGUY.lfo_filter_vca.connect(TANGUY.bp_filter3.frequency);break;case"hp":TANGUY.mixer.connect(TANGUY.hp_filter1),TANGUY.lfo_filter_vca.connect(TANGUY.hp_filter1.frequency),TANGUY.lfo_filter_vca.connect(TANGUY.hp_filter2.frequency);break;case"notch":TANGUY.mixer.connect(TANGUY.notch1),TANGUY.lfo_filter_vca.connect(TANGUY.notch1.frequency),TANGUY.lfo_filter_vca.connect(TANGUY.notch2.frequency),TANGUY.lfo_filter_vca.connect(TANGUY.notch3.frequency);break;case"off":TANGUY.mixer.connect(TANGUY.vca)}},TANGUY.update_cutoff=function(){"use strict";var e=TANGUY.program.cutoff*TANGUY.program.cutoff*22030+20;switch(TANGUY.program.filter_mode){case"lp":TANGUY.lp_filter1.frequency.setTargetAtTime(e,TANGUY.synth.currentTime,.08),TANGUY.lp_filter2.frequency.setTargetAtTime(e/2,TANGUY.synth.currentTime,.08);break;case"bp":TANGUY.bp_filter1.frequency.setTargetAtTime(e,TANGUY.synth.currentTime,.08),TANGUY.bp_filter2.frequency.setTargetAtTime(.9*e,TANGUY.synth.currentTime,.08),TANGUY.bp_filter3.frequency.setTargetAtTime(1.1*e,TANGUY.synth.currentTime,.08);
break;case"hp":TANGUY.hp_filter1.frequency.setTargetAtTime(e,TANGUY.synth.currentTime,.08),TANGUY.hp_filter2.frequency.setTargetAtTime(e,TANGUY.synth.currentTime,.08);break;case"notch":TANGUY.notch1.frequency.setTargetAtTime(e,TANGUY.synth.currentTime,.08),TANGUY.notch2.frequency.setTargetAtTime(.9*e,TANGUY.synth.currentTime,.08),TANGUY.notch3.frequency.setTargetAtTime(1.1*e,TANGUY.synth.currentTime,.08)}},TANGUY.update_resonance=function(){"use strict";var e=TANGUY.program.res*TANGUY.program.res*1e3;switch(TANGUY.program.filter_mode){case"lp":TANGUY.lp_filter1.Q.setTargetAtTime(e/82,TANGUY.synth.currentTime,.01),TANGUY.lp_filter2.Q.setTargetAtTime(e/123,TANGUY.synth.currentTime,.01);break;case"bp":TANGUY.bp_filter2.gain.setTargetAtTime(e/82,TANGUY.synth.currentTime,.01),TANGUY.bp_filter3.gain.setTargetAtTime(e/82,TANGUY.synth.currentTime,.01);break;case"hp":TANGUY.hp_filter1.Q.setTargetAtTime(e/82,TANGUY.synth.currentTime,.01),TANGUY.hp_filter2.Q.setTargetAtTime(e/123,TANGUY.synth.currentTime,.01);break;case"notch":TANGUY.notch2.gain.setTargetAtTime(e/-21,TANGUY.synth.currentTime,.01),TANGUY.notch3.gain.setTargetAtTime(e/-21,TANGUY.synth.currentTime,.01)}},TANGUY.update_vca_gain=function(){"use strict";return TANGUY.vca.gain.setTargetAtTime(TANGUY.program.vca_gain*TANGUY.program.vca_gain,TANGUY.synth.currentTime,.01)},$("#pitch-bend").mousedown(function(){"use strict";var e,t=[TANGUY.osc1_saw,TANGUY.osc1_sqr,TANGUY.osc1_tri,TANGUY.osc1_sin];$(this).mousemove(function(){for(e=0;4>e;e+=1)t[e].detune.setTargetAtTime(TANGUY.osc1_pitch+100*this.value,TANGUY.synth.currentTime,.2);TANGUY.osc2.detune.setTargetAtTime(TANGUY.osc2_pitch+100*this.value,TANGUY.synth.currentTime,.2)}).mouseup(function(){for($(this).val(0).unbind("mousemove"),e=0;4>e;e+=1)t[e].detune.setTargetAtTime(TANGUY.osc1_pitch+100*this.value,TANGUY.synth.currentTime,.2);TANGUY.osc2.detune.setTargetAtTime(TANGUY.osc2_pitch+100*this.value,TANGUY.synth.currentTime,.2)})}),TANGUY.calculate_lfo=function(){"use strict";var e=TANGUY.program.mod*TANGUY.program.mod_direction;TANGUY.lfo_pitch_vca.gain.setValueAtTime(TANGUY.program.lfo_pitch*e,TANGUY.synth.currentTime),TANGUY.lfo_filter_vca.gain.setValueAtTime(TANGUY.program.lfo_filter*e,TANGUY.synth.currentTime),TANGUY.lfo_amp_vca.gain.setValueAtTime(TANGUY.program.lfo_amp*e,TANGUY.synth.currentTime)},TANGUY.slider={grab:function(){"use strict";var e={program:this.getAttribute("data-program"),update:this.getAttribute("data-update")};return $(this).mousemove(e,TANGUY.store_program).mouseup(TANGUY.slider.release)},release:function(){"use strict";return $(this).unbind("mousemove")}},TANGUY.button={touch:function(){"use strict";var e={program:this.parentNode.parentNode.getAttribute("data-program"),update:this.parentNode.parentNode.getAttribute("data-update")};return TANGUY.button.change($(this)),$(this).one("click",e,TANGUY.store_program)},change:function(e){"use strict";var t,r=$(void 0===e.currentTarget?e:e.currentTarget),a=r.attr("data-pos");return a&&(t="pos"+a,r.parent().parent().removeClass().addClass(t)),r.parent().addClass("selected").siblings().removeClass("selected")}},TANGUY.store_program=function(e){"use strict";switch(e.data.program){case"osc1_kbd":case"osc2_kbd":TANGUY.program[e.data.program]="on"===e.currentTarget.value?!0:!1;break;case"osc2_waveform":case"noise_color":case"filter_mode":case"lfo_shape":case"portamento_mode":TANGUY.program[e.data.program]=e.currentTarget.value;break;default:TANGUY.program[e.data.program]=parseFloat(e.currentTarget.value)}return TANGUY[e.data.update]?TANGUY[e.data.update]():void 0},$("#keyboard").on("mousedown","button",TANGUY.gate_on).on("mouseup","button",TANGUY.gate_off),$(document).keypress(function(e){"use strict";switch(e.which){case 45:TANGUY.shift_octave(-1);break;case 43:case 61:TANGUY.shift_octave(1);break;case 42:TANGUY.save_program()}}).keydown(function(e){"use strict";if(TANGUY.key_down===!1)switch(TANGUY.key_active=e.which,TANGUY.key_down=!0,e.which){case 65:$("#c1").trigger("mousedown").addClass("playing");break;case 83:$("#d1").trigger("mousedown").addClass("playing");break;case 68:$("#e1").trigger("mousedown").addClass("playing");break;case 70:$("#f1").trigger("mousedown").addClass("playing");break;case 71:$("#g1").trigger("mousedown").addClass("playing");break;case 72:$("#a1").trigger("mousedown").addClass("playing");break;case 74:$("#b1").trigger("mousedown").addClass("playing");break;case 75:$("#c2").trigger("mousedown").addClass("playing");break;case 76:$("#d2").trigger("mousedown").addClass("playing");break;case 186:$("#e2").trigger("mousedown").addClass("playing");break;case 222:$("#f2").trigger("mousedown").addClass("playing");break;case 87:$("#cs1").trigger("mousedown").addClass("playing");break;case 69:$("#ds1").trigger("mousedown").addClass("playing");break;case 84:$("#fs1").trigger("mousedown").addClass("playing");break;case 89:$("#gs1").trigger("mousedown").addClass("playing");break;case 85:$("#as1").trigger("mousedown").addClass("playing");break;case 79:$("#cs2").trigger("mousedown").addClass("playing");break;case 80:$("#ds2").trigger("mousedown").addClass("playing");break;case 221:$("#fs2").trigger("mousedown").addClass("playing")}}).keyup(function(e){"use strict";if(e.which===TANGUY.key_active)switch(TANGUY.key_down=!1,e.which){case 65:$("#c1").trigger("mouseup").removeClass("playing");break;case 83:$("#d1").trigger("mouseup").removeClass("playing");break;case 68:$("#e1").trigger("mouseup").removeClass("playing");break;case 70:$("#f1").trigger("mouseup").removeClass("playing");break;case 71:$("#g1").trigger("mouseup").removeClass("playing");break;case 72:$("#a1").trigger("mouseup").removeClass("playing");break;case 74:$("#b1").trigger("mouseup").removeClass("playing");break;case 75:$("#c2").trigger("mouseup").removeClass("playing");break;case 76:$("#d2").trigger("mouseup").removeClass("playing");break;case 186:$("#e2").trigger("mouseup").removeClass("playing");break;case 222:$("#f2").trigger("mouseup").removeClass("playing");break;case 87:$("#cs1").trigger("mouseup").removeClass("playing");break;case 69:$("#ds1").trigger("mouseup").removeClass("playing");break;case 84:$("#fs1").trigger("mouseup").removeClass("playing");break;case 89:$("#gs1").trigger("mouseup").removeClass("playing");break;case 85:$("#as1").trigger("mouseup").removeClass("playing");break;case 79:$("#cs2").trigger("mouseup").removeClass("playing");break;case 80:$("#ds2").trigger("mouseup").removeClass("playing");break;case 221:$("#fs2").trigger("mouseup").removeClass("playing")}});