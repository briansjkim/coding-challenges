// Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available
// In HiCal, a meeting is stored as objects with integer properties startTime and endTime. These integers represent the number of 30-minute blocks past 9:00am.

// Ex: 
// { startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
// { startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

// Given 
// [
//     { startTime: 0,  endTime: 1 },
//     { startTime: 3,  endTime: 5 },
//     { startTime: 4,  endTime: 8 },
//     { startTime: 10, endTime: 12 },
//     { startTime: 9,  endTime: 10 },
// ]

// your function would return 
// [
//     { startTime: 0, endTime: 1 },
//     { startTime: 3, endTime: 8 },
//     { startTime: 9, endTime: 12 },
// ]

// Don't assume the meetings are in order. The meeting times are coming from multiple teams

function mergeRanges(meetings) {
  const sortedMeetings = meetings.sort(function(a, b) {
    return a.startTime - b.startTime;
  });

  // add the first sortedMeeting since it'll always be the first meeting
  let mergedMeetings = [sortedMeetings[0]];

  // iterate through the sortedMeetings but start i at 1 since we already added the first meeting
  for (let i = 1; i < sortedMeetings.length; i++) {
    // since we need to compare the times between each meeting, create two variables storing the last merged meeting and the current meeting
    let currentMeeting = sortedMeetings[i];
    let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
    
    // check if the lastMergedMeeting's endtime is greater than or equal to the next meeting's startTime
    // we do this bc we want to see if the meetings need to be merged or separated
    if (lastMergedMeeting.endTime >= currentMeeting.startTime) {
      // if it's true, we want the meeting's endTime to be the latest one
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {
      mergedMeetings.push(currentMeeting);
    };
  };

  return mergedMeetings;
};

// meetings overlap
let actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]);
// result: [{ startTime: 1, endTime: 4 }];

// meetings touch 
actual = mergeRanges([{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }]);
// result = [{ startTime: 5, endTime: 8 }];

// multiple merged meetings
actual = mergeRanges([
  { startTime: 1, endTime: 4 },
  { startTime: 2, endTime: 5 },
  { startTime: 5, endTime: 8 },
]);
// result = [{ startTime: 1, endTime: 8 }];

actual = mergeRanges([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]);

// result = [
//     { startTime: 0, endTime: 1 },
//     { startTime: 3, endTime: 8 },
//     { startTime: 9, endTime: 12 },
//   ];
