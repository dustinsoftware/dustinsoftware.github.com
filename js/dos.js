var currentPath = new Array();
var commands = {
	'projects': {
		'csharp' : {
			'tournament-scheduler.exe' : function() { 
				window.open('https://github.com/dustinsoftware/Challonge-Scheduler');
			},		
		},
		'php' : {
			'craigslist-clone.exe' : function() {
				window.open('https://github.com/dustinsoftware/Campusbullet');
			},
		},
		'html5' : {
			'fix-github-width.exe' : function() {
				window.open('https://github.com/dustinsoftware/Github-Width');
			},
			'this-website.exe': function() {
				window.open('https://github.com/dustinsoftware/dustinsoftware.github.com');
			}
		},
	},
	'about.exe' : function() {  
		writeOutput('Thanks for looking!  I wrote this site in my spare time, because programming is awesome.  <br />Check out some of the projects I\'ve done in the PROJECTS folder! <br />');
	},
};
var currentDir = commands;

var builtInCommands = {
	'cls' : function() { 
		$('.outputTop').text('');
	},
	'dir' : function() { 
		$.each(currentDir, function(key, value) { 
			if (jQuery.type(value) == "object")
				writeOutput(key + " &lt;dir&gt;<br />");
			else
				writeOutput(key + "<br />"); 
		});
	},
	'' : function() { },
	'cd' : function(e) { 
		if (e == null || e == '') {
			return;
		}
		if (e == '\\') {
			currentPath = new Array();
		}
		
		var targetDirectory = e.split('\\');
		var newTargetDirectory = currentPath.slice();
		
		$.each(targetDirectory, function(index, directory) {
			if (directory == '..' && newTargetDirectory.length != 0) {
				newTargetDirectory.pop();
			} else if (directory.trim() != '') {
				newTargetDirectory.push(directory);
			}
		});
		
		var failed = false;
		var newCurrentDir = commands;
		$.each(newTargetDirectory, function(index, directory) {
			if (failed)
			 	return;
			
			if (newCurrentDir[directory] == null)
				failed = true;
			else
				newCurrentDir = newCurrentDir[directory];
		});
		
		if (failed) {
			writeOutput("Folder not found. <br />");
		} else {
			currentPath = newTargetDirectory;
			currentDir = newCurrentDir;
		}
	},
	'help' : function() { 
		$.each(builtInCommands, function(key, value) {
			if (key != '')
				writeOutput(key + "<br />"); 
		});
	},
}

function runCommand(inputString) {
	writeOutput(getPrompt() + " " + htmlEscape(inputString) + "<br />");
	var parts = inputString.split(' ');
	
	var command = currentDir[parts[0].toLowerCase()] ||
		currentDir[parts[0].toLowerCase() + ".exe"] ||
		builtInCommands[parts[0].toLowerCase()];
		
	if (command != null && jQuery.type(command) == "function") {
		command(parts[1]);
	} else {
		writeOutput("Bad command or file name. <br />");
	}
	
	writeOutput("<br />");
}

function writeOutput(output) {
	$('.outputTop').append(output);
}

function updatePrompt() {
	$('.currentDir').text(getPrompt());
}

function getPrompt() {
	return "c:\\" + currentPath.join('\\') + ">";
}

function htmlEscape(str) {
    return String(str)
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}

$(document).ready(function() {
	updatePrompt();
	$('.textInput').focus();
});

$('.textInput').blur(function() {
	window.setTimeout(function() { 
		$('.textInput').focus();
	}, 10);
})
$('.textInput').keypress(function(e) {
	if (e.which != 13)
		return;
		
	runCommand($('.textInput').val());
	
	$('.textInput').val('');
	updatePrompt();	
})

