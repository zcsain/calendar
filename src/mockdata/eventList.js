const eventList = [
	{
		kind: "calendar#event",
		etag: '"3260690700056000"',
		id: "5bmund4h51jrilgcapnkejfoko",
		status: "confirmed",
		htmlLink:
			"https://www.google.com/calendar/event?eid=NWJtdW5kNGg1MWpyaWxnY2FwbmtlamZva28gemNzYWluQG0",
		created: "2021-08-30T17:42:29.000Z",
		updated: "2021-08-30T17:42:30.078Z",
		summary: "Origin Test Event",
		creator: {
			email: "zcsain@gmail.com",
			self: true,
		},
		organizer: {
			email: "zcsain@gmail.com",
			self: true,
		},
		start: {
			dateTime: "2021-08-31T15:00:00+02:00",
		},
		end: {
			dateTime: "2021-08-31T16:00:00+02:00",
		},
		iCalUID: "5bmund4h51jrilgcapnkejfoko@google.com",
		sequence: 0,
		reminders: {
			useDefault: false,
			overrides: [
				{
					method: "popup",
					minutes: 10,
				},
				{
					method: "email",
					minutes: 1440,
				},
			],
		},
		eventType: "default",
	},
	{
		kind: "calendar#event",
		etag: '"3260676414260000"',
		id: "1rp0hk6efo1ekrtvb5bcsshbav",
		status: "confirmed",
		htmlLink:
			"https://www.google.com/calendar/event?eid=MXJwMGhrNmVmbzFla3J0dmI1YmNzc2hiYXYgemNzYWluQG0",
		created: "2021-08-30T15:42:24.000Z",
		updated: "2021-08-30T15:43:27.130Z",
		summary: "Test Event TUE",
		creator: {
			email: "zcsain@gmail.com",
			self: true,
		},
		organizer: {
			email: "zcsain@gmail.com",
			self: true,
		},
		start: {
			dateTime: "2021-08-31T18:00:00+02:00",
		},
		end: {
			dateTime: "2021-08-31T19:00:00+02:00",
		},
		iCalUID: "1rp0hk6efo1ekrtvb5bcsshbav@google.com",
		sequence: 0,
		reminders: {
			useDefault: true,
		},
		eventType: "default",
	},
	{
		kind: "calendar#event",
		etag: '"3260687977864000"',
		id: "7tmr1m1dkena5qnq7aogklktfa",
		status: "confirmed",
		htmlLink:
			"https://www.google.com/calendar/event?eid=N3RtcjFtMWRrZW5hNXFucTdhb2drbGt0ZmEgemNzYWluQG0",
		created: "2021-08-30T15:42:44.000Z",
		updated: "2021-08-30T17:19:48.932Z",
		summary: "Test Event WED",
		creator: {
			email: "zcsain@gmail.com",
			self: true,
		},
		organizer: {
			email: "zcsain@gmail.com",
			self: true,
		},
		start: {
			dateTime: "2021-09-01T18:00:00+02:00",
		},
		end: {
			dateTime: "2021-09-01T19:00:00+02:00",
		},
		iCalUID: "7tmr1m1dkena5qnq7aogklktfa@google.com",
		sequence: 0,
		reminders: {
			useDefault: true,
		},
		eventType: "default",
	},
	{
		kind: "calendar#event",
		etag: '"3260676394612000"',
		id: "4v3mm18qsmt42f02ijajaolbvk",
		status: "confirmed",
		htmlLink:
			"https://www.google.com/calendar/event?eid=NHYzbW0xOHFzbXQ0MmYwMmlqYWphb2xidmsgemNzYWluQG0",
		created: "2021-08-30T15:43:17.000Z",
		updated: "2021-08-30T15:43:17.306Z",
		summary: "Test Event THU",
		creator: {
			email: "zcsain@gmail.com",
			self: true,
		},
		organizer: {
			email: "zcsain@gmail.com",
			self: true,
		},
		start: {
			dateTime: "2021-09-02T18:00:00+02:00",
		},
		end: {
			dateTime: "2021-09-02T19:00:00+02:00",
		},
		iCalUID: "4v3mm18qsmt42f02ijajaolbvk@google.com",
		sequence: 0,
		reminders: {
			useDefault: true,
		},
		eventType: "default",
	},
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
