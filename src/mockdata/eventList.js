const eventList = [
	{
		kind: "calendar#event",
		etag: '"3260688006820000"',
		id: "4o7oen4breniiq3gesmms3c6cm",
		status: "confirmed",
		htmlLink:
			"https://www.google.com/calendar/event?eid=NG83b2VuNGJyZW5paXEzZ2VzbW1zM2M2Y20gemNzYWluQG0",
		created: "2021-08-30T17:20:03.000Z",
		updated: "2021-08-30T17:20:03.410Z",
		summary: "Test Event FRI",
		creator: {
			email: "zcsain@gmail.com",
			self: true,
		},
		organizer: {
			email: "zcsain@gmail.com",
			self: true,
		},
		start: {
			dateTime: "2021-09-03T19:30:00+02:00",
		},
		end: {
			dateTime: "2021-09-03T20:30:00+02:00",
		},
		iCalUID: "4o7oen4breniiq3gesmms3c6cm@google.com",
		sequence: 0,
		reminders: {
			useDefault: true,
		},
		eventType: "default",
	},
	{
		kind: "calendar#event",
		etag: '"3260999909466000"',
		id: "3gjp73rbeu33qo7vvbh9khmb9a",
		status: "confirmed",
		htmlLink:
			"https://www.google.com/calendar/event?eid=M2dqcDczcmJldTMzcW83dnZiaDlraG1iOWEgemNzYWluQG0",
		created: "2021-09-01T12:39:01.000Z",
		updated: "2021-09-01T12:39:14.759Z",
		summary: "E4",
		creator: {
			email: "zcsain@gmail.com",
			self: true,
		},
		organizer: {
			email: "zcsain@gmail.com",
			self: true,
		},
		start: {
			dateTime: "2021-09-04T10:00:00+02:00",
		},
		end: {
			dateTime: "2021-09-04T10:30:00+02:00",
		},
		transparency: "transparent",
		iCalUID: "3gjp73rbeu33qo7vvbh9khmb9a@google.com",
		sequence: 1,
		reminders: {
			useDefault: false,
			overrides: [
				{
					method: "popup",
					minutes: 30,
				},
				{
					method: "email",
					minutes: 30,
				},
			],
		},
		eventType: "default",
	},
	{
		kind: "calendar#event",
		etag: '"3260986578474000"',
		id: "7g5t875r9j7infotn8vsb7gh01",
		status: "confirmed",
		htmlLink:
			"https://www.google.com/calendar/event?eid=N2c1dDg3NXI5ajdpbmZvdG44dnNiN2doMDEgemNzYWluQG0",
		created: "2021-09-01T10:48:09.000Z",
		updated: "2021-09-01T10:48:09.237Z",
		summary: "Test event SAT2",
		creator: {
			email: "zcsain@gmail.com",
			self: true,
		},
		organizer: {
			email: "zcsain@gmail.com",
			self: true,
		},
		start: {
			dateTime: "2021-09-04T13:00:00+02:00",
		},
		end: {
			dateTime: "2021-09-04T14:00:00+02:00",
		},
		iCalUID: "7g5t875r9j7infotn8vsb7gh01@google.com",
		sequence: 0,
		reminders: {
			useDefault: true,
		},
		eventType: "default",
	},
	{
		kind: "calendar#event",
		etag: '"3260999823608000"',
		id: "67hqmpref4goaao14bupicdrnt",
		status: "confirmed",
		htmlLink:
			"https://www.google.com/calendar/event?eid=NjdocW1wcmVmNGdvYWFvMTRidXBpY2RybnQgemNzYWluQG0",
		created: "2021-09-01T12:38:31.000Z",
		updated: "2021-09-01T12:38:31.804Z",
		summary: "E1",
		creator: {
			email: "zcsain@gmail.com",
			self: true,
		},
		organizer: {
			email: "zcsain@gmail.com",
			self: true,
		},
		start: {
			dateTime: "2021-09-04T16:15:00+02:00",
		},
		end: {
			dateTime: "2021-09-04T17:15:00+02:00",
		},
		iCalUID: "67hqmpref4goaao14bupicdrnt@google.com",
		sequence: 0,
		reminders: {
			useDefault: true,
		},
		eventType: "default",
	},
	{
		kind: "calendar#event",
		etag: '"3260999841902000"',
		id: "5gur33akvpep6nktpqqr7aj3c2",
		status: "confirmed",
		htmlLink:
			"https://www.google.com/calendar/event?eid=NWd1cjMzYWt2cGVwNm5rdHBxcXI3YWozYzIgemNzYWluQG0",
		created: "2021-09-01T12:38:40.000Z",
		updated: "2021-09-01T12:38:40.951Z",
		summary: "E2",
		creator: {
			email: "zcsain@gmail.com",
			self: true,
		},
		organizer: {
			email: "zcsain@gmail.com",
			self: true,
		},
		start: {
			dateTime: "2021-09-04T18:45:00+02:00",
		},
		end: {
			dateTime: "2021-09-04T19:45:00+02:00",
		},
		iCalUID: "5gur33akvpep6nktpqqr7aj3c2@google.com",
		sequence: 0,
		reminders: {
			useDefault: true,
		},
		eventType: "default",
	},
	{
		kind: "calendar#event",
		etag: '"3260688033476000"',
		id: "4o8lkdrmq19guctu407pcgntji",
		status: "confirmed",
		htmlLink:
			"https://www.google.com/calendar/event?eid=NG84bGtkcm1xMTlndWN0dTQwN3BjZ250amkgemNzYWluQG0",
		created: "2021-08-30T17:20:16.000Z",
		updated: "2021-08-30T17:20:16.738Z",
		summary: "Test Event SAT",
		creator: {
			email: "zcsain@gmail.com",
			self: true,
		},
		organizer: {
			email: "zcsain@gmail.com",
			self: true,
		},
		start: {
			dateTime: "2021-09-04T19:30:00+02:00",
		},
		end: {
			dateTime: "2021-09-04T20:30:00+02:00",
		},
		iCalUID: "4o8lkdrmq19guctu407pcgntji@google.com",
		sequence: 0,
		reminders: {
			useDefault: true,
		},
		eventType: "default",
	},
	{
		kind: "calendar#event",
		etag: '"3260999865272000"',
		id: "6jjq7hnhjpjp802o9k7mu4un50",
		status: "confirmed",
		htmlLink:
			"https://www.google.com/calendar/event?eid=NmpqcTdobmhqcGpwODAybzlrN211NHVuNTAgemNzYWluQG0",
		created: "2021-09-01T12:38:52.000Z",
		updated: "2021-09-01T12:38:52.636Z",
		summary: "E3",
		creator: {
			email: "zcsain@gmail.com",
			self: true,
		},
		organizer: {
			email: "zcsain@gmail.com",
			self: true,
		},
		start: {
			dateTime: "2021-09-04T21:00:00+02:00",
		},
		end: {
			dateTime: "2021-09-04T22:00:00+02:00",
		},
		iCalUID: "6jjq7hnhjpjp802o9k7mu4un50@google.com",
		sequence: 0,
		reminders: {
			useDefault: true,
		},
		eventType: "default",
	},
	{
		kind: "calendar#event",
		etag: '"3260688080638000"',
		id: "5ivj99limeqqs96vbq5jh8p8sv",
		status: "confirmed",
		htmlLink:
			"https://www.google.com/calendar/event?eid=NWl2ajk5bGltZXFxczk2dmJxNWpoOHA4c3YgemNzYWluQG0",
		created: "2021-08-30T17:20:40.000Z",
		updated: "2021-08-30T17:20:40.319Z",
		summary: "Test Event SUN",
		creator: {
			email: "zcsain@gmail.com",
			self: true,
		},
		organizer: {
			email: "zcsain@gmail.com",
			self: true,
		},
		start: {
			dateTime: "2021-09-05T19:30:00+02:00",
		},
		end: {
			dateTime: "2021-09-05T20:30:00+02:00",
		},
		iCalUID: "5ivj99limeqqs96vbq5jh8p8sv@google.com",
		sequence: 0,
		reminders: {
			useDefault: true,
		},
		eventType: "default",
	},
];

export default eventList;
