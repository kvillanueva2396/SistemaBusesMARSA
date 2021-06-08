import React from "react";

export const BusAdd = () => {
	return (
		<div class="container-tight py-4">
			<div class="card card-md">
				<div class="card-body text-center py-4 p-sm-5">
					LOGO
					<h1 class="mt-5">Welcome to Tabler!</h1>
					<p class="text-muted">
						Tabler comes with tons of well-designed components and features.
						Start your adventure with Tabler and make your dashboard great
						again.
					</p>
				</div>
				<div class="hr-text hr-text-center hr-text-spaceless">your data</div>
				<div class="card-body">
					<div class="mb-3">
						<label class="form-label">Create your Tabler URL</label>
						<div class="input-group input-group-flat">
							<span class="input-group-text">https://tabler.io/</span>
							<input type="text" class="form-control ps-1" autocomplete="off" />
						</div>
						<div class="form-hint">
							Choose a URL that describes you or your business in a concise way.
							Make it short and easy to remember so you can share links with
							ease.
						</div>
					</div>
					<div>
						<label class="form-label">Timezone</label>
						<select class="form-select mb-0">
							<option value="DST">
								(UTC-12:00) International Date Line West
							</option>
							<option value="U">
								(UTC-11:00) Coordinated Universal Time-11
							</option>
							<option value="HST">(UTC-10:00) Hawaii</option>
							<option value="AKDT">(UTC-09:00) Alaska</option>
							<option value="PDT">(UTC-08:00) Baja California</option>
							<option value="PDT">
								(UTC-07:00) Pacific Time (US &amp; Canada)
							</option>
							<option value="PST">
								(UTC-08:00) Pacific Time (US &amp; Canada)
							</option>
							<option value="UMST">(UTC-07:00) Arizona</option>
							<option value="MDT">
								(UTC-07:00) Chihuahua, La Paz, Mazatlan
							</option>
							<option value="MDT">
								(UTC-07:00) Mountain Time (US &amp; Canada)
							</option>
							<option value="CAST">(UTC-06:00) Central America</option>
							<option value="CDT">
								(UTC-06:00) Central Time (US &amp; Canada)
							</option>
							<option value="CDT">
								(UTC-06:00) Guadalajara, Mexico City, Monterrey
							</option>
							<option value="CCST">(UTC-06:00) Saskatchewan</option>
							<option value="SPST">(UTC-05:00) Bogota, Lima, Quito</option>
							<option value="EDT">
								(UTC-05:00) Eastern Time (US &amp; Canada)
							</option>
							<option value="UEDT">(UTC-05:00) Indiana (East)</option>
							<option value="VST">(UTC-04:30) Caracas</option>
							<option value="PYT">(UTC-04:00) Asuncion</option>
							<option value="ADT">(UTC-04:00) Atlantic Time (Canada)</option>
							<option value="CBST">(UTC-04:00) Cuiaba</option>
							<option value="SWST">
								(UTC-04:00) Georgetown, La Paz, Manaus, San Juan
							</option>
							<option value="PSST">(UTC-04:00) Santiago</option>
							<option value="NDT">(UTC-03:30) Newfoundland</option>
							<option value="ESAST">(UTC-03:00) Brasilia</option>
							<option value="AST">(UTC-03:00) Buenos Aires</option>
							<option value="SEST">(UTC-03:00) Cayenne, Fortaleza</option>
							<option value="GDT">(UTC-03:00) Greenland</option>
							<option value="MST">(UTC-03:00) Montevideo</option>
							<option value="BST">(UTC-03:00) Salvador</option>
							<option value="U">
								(UTC-02:00) Coordinated Universal Time-02
							</option>
							<option value="MDT">(UTC-02:00) Mid-Atlantic - Old</option>
							<option value="ADT">(UTC-01:00) Azores</option>
							<option value="CVST">(UTC-01:00) Cape Verde Is.</option>
							<option value="MDT">(UTC) Casablanca</option>
							<option value="UTC">(UTC) Coordinated Universal Time</option>
							<option value="GMT">(UTC) Edinburgh, London</option>
							<option value="BST">(UTC+01:00) Edinburgh, London</option>
							<option value="GDT">(UTC) Dublin, Lisbon</option>
							<option value="GST">(UTC) Monrovia, Reykjavik</option>
							<option value="WEDT">
								(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna
							</option>
							<option value="CEDT" selected="">
								(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague
							</option>
							<option value="RDT">
								(UTC+01:00) Brussels, Copenhagen, Madrid, Paris
							</option>
							<option value="CEDT" selected="">
								(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb
							</option>
							<option value="WCAST">(UTC+01:00) West Central Africa</option>
							<option value="NST">(UTC+01:00) Windhoek</option>
							<option value="GDT">(UTC+02:00) Athens, Bucharest</option>
							<option value="MEDT">(UTC+02:00) Beirut</option>
							<option value="EST">(UTC+02:00) Cairo</option>
							<option value="SDT">(UTC+02:00) Damascus</option>
							<option value="EEDT">(UTC+02:00) E. Europe</option>
							<option value="SAST">(UTC+02:00) Harare, Pretoria</option>
							<option value="FDT">
								(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius
							</option>
							<option value="TDT">(UTC+03:00) Istanbul</option>
							<option value="JDT">(UTC+02:00) Jerusalem</option>
							<option value="LST">(UTC+02:00) Tripoli</option>
							<option value="JST">(UTC+03:00) Amman</option>
							<option value="AST">(UTC+03:00) Baghdad</option>
							<option value="KST">(UTC+02:00) Kaliningrad</option>
							<option value="AST">(UTC+03:00) Kuwait, Riyadh</option>
							<option value="EAST">(UTC+03:00) Nairobi</option>
							<option value="MSK">
								(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk
							</option>
							<option value="SAMT">
								(UTC+04:00) Samara, Ulyanovsk, Saratov
							</option>
							<option value="IDT">(UTC+03:30) Tehran</option>
							<option value="AST">(UTC+04:00) Abu Dhabi, Muscat</option>
							<option value="ADT">(UTC+04:00) Baku</option>
							<option value="MST">(UTC+04:00) Port Louis</option>
							<option value="GET">(UTC+04:00) Tbilisi</option>
							<option value="CST">(UTC+04:00) Yerevan</option>
							<option value="AST">(UTC+04:30) Kabul</option>
							<option value="WAST">(UTC+05:00) Ashgabat, Tashkent</option>
							<option value="YEKT">(UTC+05:00) Yekaterinburg</option>
							<option value="PKT">(UTC+05:00) Islamabad, Karachi</option>
							<option value="IST">
								(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi
							</option>
							<option value="SLST">(UTC+05:30) Sri Jayawardenepura</option>
							<option value="NST">(UTC+05:45) Kathmandu</option>
							<option value="CAST">(UTC+06:00) Nur-Sultan (Astana)</option>
							<option value="BST">(UTC+06:00) Dhaka</option>
							<option value="MST">(UTC+06:30) Yangon (Rangoon)</option>
							<option value="SAST">(UTC+07:00) Bangkok, Hanoi, Jakarta</option>
							<option value="NCAST">(UTC+07:00) Novosibirsk</option>
							<option value="CST">
								(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi
							</option>
							<option value="NAST">(UTC+08:00) Krasnoyarsk</option>
							<option value="MPST">(UTC+08:00) Kuala Lumpur, Singapore</option>
							<option value="WAST">(UTC+08:00) Perth</option>
							<option value="TST">(UTC+08:00) Taipei</option>
							<option value="UST">(UTC+08:00) Ulaanbaatar</option>
							<option value="NAEST">(UTC+08:00) Irkutsk</option>
							<option value="JST">(UTC+09:00) Osaka, Sapporo, Tokyo</option>
							<option value="KST">(UTC+09:00) Seoul</option>
							<option value="CAST">(UTC+09:30) Adelaide</option>
							<option value="ACST">(UTC+09:30) Darwin</option>
							<option value="EAST">(UTC+10:00) Brisbane</option>
							<option value="AEST">
								(UTC+10:00) Canberra, Melbourne, Sydney
							</option>
							<option value="WPST">(UTC+10:00) Guam, Port Moresby</option>
							<option value="TST">(UTC+10:00) Hobart</option>
							<option value="YST">(UTC+09:00) Yakutsk</option>
							<option value="CPST">
								(UTC+11:00) Solomon Is., New Caledonia
							</option>
							<option value="VST">(UTC+11:00) Vladivostok</option>
							<option value="NZST">(UTC+12:00) Auckland, Wellington</option>
							<option value="U">
								(UTC+12:00) Coordinated Universal Time+12
							</option>
							<option value="FST">(UTC+12:00) Fiji</option>
							<option value="MST">(UTC+12:00) Magadan</option>
							<option value="KDT">
								(UTC+12:00) Petropavlovsk-Kamchatsky - Old
							</option>
							<option value="TST">(UTC+13:00) Nuku'alofa</option>
							<option value="SST">(UTC+13:00) Samoa</option>
						</select>
					</div>
				</div>
			</div>
			<div class="row align-items-center mt-3">
				<div class="col-4">
					<div class="progress">
						<div
							class="progress-bar"
							style={{ width: "25%" }}
							role="progressbar"
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
						>
							<span class="visually-hidden">25% Complete</span>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="btn-list justify-content-end">
						<a href="#" class="btn btn-link link-secondary">
							Set up later
						</a>
						<a href="#" class="btn btn-primary">
							Continue
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
