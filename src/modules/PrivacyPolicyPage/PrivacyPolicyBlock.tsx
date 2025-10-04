function PrivacyPolicyBlock() {
	return (
		<>
			<div className="mt-[45px] lg:mt-[90px] mb-[30px] lg:mb-[50px] max-w-[450px] lg:max-w-[900px] w-[90%] h-auto justify-self-center grid gap-[7px] lg:gap-[15px] text-base lg:text-2xl text-justify">
				<p className="text-xl lg:text-4xl font-bold">Privacy Policy</p>
				<p>
					Your privacy is important to us at TimeTrackerly. This policy explains what data we collect, how it
					is used, and how you can manage it.
				</p>
				<p className="text-xl lg:text-4xl font-bold mt-[17px] lg:mt-[35px]">Data We Collect</p>
				<p>
					TimeTrackerly collects information about your activity history and a list of your favorite or
					frequently performed actions. This helps the application remember your preferences so you don’t have
					to enter them manually each time you use the service.
				</p>
				<p className="text-xl lg:text-4xl font-bold mt-[17px] lg:mt-[35px]">Use of Data</p>
				<p>
					We also use Google Analytics to collect anonymized data about how users interact with the site. This
					information helps us improve the performance and user experience of TimeTrackerly.
				</p>
				<p className="text-xl lg:text-4xl font-bold mt-[17px] lg:mt-[35px]">Data Storage</p>
				<p>
					All other data collected by TimeTrackerly is stored locally on your device using localStorage. These
					data remain on your device until you manually clear your browser’s localStorage, which will
					permanently remove all locally stored information.
				</p>
				<p className="text-xl lg:text-4xl font-bold mt-[17px] lg:mt-[35px]">Data Sharing</p>
				<p>
					We do not share your personal data with any third parties, except for the anonymized data
					automatically collected by Google Analytics.
				</p>
				<p className="text-xl lg:text-4xl font-bold mt-[17px] lg:mt-[35px]">User Rights</p>
				<p>
					You have full control over your locally stored data. At any time, you can clear your browser’s
					localStorage, which will remove all activity history and saved actions. Data collected by Google
					Analytics cannot be deleted manually, as it is handled separately by Google.
				</p>
				<p className="text-xl lg:text-4xl font-bold mt-[17px] lg:mt-[35px]">Open Source</p>
				<p>
					TimeTrackerly is an open-source project. The full source code is publicly available on GitHub, which
					you can access via the link on the About page.
				</p>
				<p className="text-xl lg:text-4xl font-bold mt-[17px] lg:mt-[35px]">Contact</p>
				<p>
					If you have any questions or concerns about your data, you can contact us via the Telegram link on
					the About page.
				</p>
			</div>
		</>
	);
}

export default PrivacyPolicyBlock;
