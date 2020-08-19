// Format SatSchedule
class scheduleEvent {
    constructor(title, start, end, track) {
        this.title = title;
        this.startTime = start;
        
        if (track == undefined){
          this.end = null
          this.track = end;
        }
        else{
          this.endTime = end;
          this.track = track;
        }
        
    }

}

var saturday = [];
var sunday = [];

// track = {main, ws} where ws is workshop
saturday.push(new scheduleEvent("Check-In Opens", "9:00 - 10:30", "main"));
saturday.push(new scheduleEvent("Opening Ceremony", "11:00 - 12:00", "main"));
saturday.push(new scheduleEvent("Hacking Begins", "12:00", "main"));
saturday.push(new scheduleEvent("Team Formations", "12:00 - 12:30", "main"));
saturday.push(new scheduleEvent("Workshop 1", "14:00PM - 15:00", "ws"));
saturday.push(new scheduleEvent("Workshop 2", "17:00 - 18:00", "ws"));
saturday.push(new scheduleEvent("Let's Play a Game (Social)", "19:00 - 21:00", "main"));
saturday.push(new scheduleEvent("Social Event", "22:00 - 00:00", "main"));
sunday.push(new scheduleEvent("Chance to win swag?!", "00:00 - 01:00", "main"));
sunday.push(new scheduleEvent("Let's Play a Game (Social)", "03:00", "main"));
sunday.push(new scheduleEvent("Let's Play a Game (Social)", "05:00", "main"));
sunday.push(new scheduleEvent("Let's Play a Game (Social)", "07:00", "main"));
sunday.push(new scheduleEvent("Morning Updates", "09:00", "main"));
sunday.push(new scheduleEvent("Hacking Ends", "12:00", "main"));
sunday.push(new scheduleEvent("Judging Expo", "12:30 - 14:00", "main"));
sunday.push(new scheduleEvent("Closing Ceremony", "15:15", "main"));

saturday.sort((a,b) => (a.startTime >= b.startTime) ? 1: -1);
sunday.sort((a,b) => (a.startTime >= b.startTime) ? 1 : -1 );

var str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th><th></th><th>Workshops</th></tr>';
saturday.forEach(function(ev, index){
  if (index ==0  || saturday[index-1].startTime != ev.startTime){     
    str += '<tr>';
    if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    }

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
      if(index != saturday.length-1 && ev.startTime == saturday[index+1].startTime){
        str += '<th>';
        str+=saturday[index+1].startTime
        if(saturday[index+1].endTime){
        str +=  '<br />|<br />' + saturday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + saturday[index+1].title+ '</td>';
    }
  else{
  str +='<th></th>';
  str += '<td></td>';
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("saturdayContainer").innerHTML = str;

var str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th><th></th><th>Workshops</th></tr>';
sunday.forEach(function(ev, index){
  if (index ==0  || (sunday[index-1].startTime != ev.startTime || sunday[index-1].track == ev.track) ){     
    str += '<tr>';
    if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    }
    
    

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
    if (index != sunday.length-1 && ev.startTime == sunday[index+1].startTime && ev.track != sunday[index+1].track){
        str += '<th>';
        str+=sunday[index+1].startTime
        if(sunday[index+1].endTime){
        str +=  '<br />|<br />' + sunday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + sunday[index+1].title+ '</td>';
    
  }
  else{
  str +='<th></th>';
  str += '<td></td>';
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("sundayContainer").innerHTML = str;
