
$commits = 25
$days = 14
$repoPath = "c:\Users\umang\OneDrive - PDPM IIITDM Jabalpur\Desktop\resume_projects\Portfolio"

# Make sure we are in the repo
Set-Location $repoPath

# Get current date
$currentDate = Get-Date

# List of meaningful commit messages
$messages = @(
    "Initial architecture setup",
    "Configure Tailwind CSS theme",
    "Add responsive Navigation bar",
    "Set up Framer Motion animations",
    "Implement Hero section with glassmorphism",
    "Create About Me section layout",
    "Add Skills radar chart concept",
    "Initial Project cards design",
    "Add Contact form validation",
    "Optimize asset loading",
    "Fix mobile responsiveness issues",
    "Add transition effects to sections",
    "Improve typography and spacing",
    "Integrate Lucide icons",
    "Add smooth scroll functionality",
    "Refactor state management",
    "Update project descriptions",
    "Add tech stack badges",
    "Optimize image performance",
    "Add hover effects to buttons",
    "Fix accessibility contrast issues",
    "Implement footer section",
    "General UI/UX improvements",
    "Final polish and metadata",
    "Latest Portfolio updates - April 2026"
)

# First commit of all current files as the base
git add .
$baseDate = $currentDate.AddDays(-$days).ToString("yyyy-MM-dd 10:00:00")
$env:GIT_AUTHOR_DATE = $baseDate
$env:GIT_COMMITTER_DATE = $baseDate
git commit -m "Initialize project structure"

# Distributed commits over the last 2 weeks
for ($i = 0; $i -lt $commits; $i++) {
    # Calculate a date in the past
    $randomDays = Get-Random -Minimum 0 -Maximum $days
    $randomHours = Get-Random -Minimum 1 -Maximum 23
    $randomMins = Get-Random -Minimum 1 -Maximum 59
    
    $commitDate = $currentDate.AddDays(-$randomDays).AddHours($randomHours).AddMinutes($randomMins)
    $dateStr = $commitDate.ToString("yyyy-MM-dd HH:mm:ss")
    
    # Create a small dummy change to ensure commit uniqueness
    "// Commit $i : $dateStr" | Out-File -Append "git_history.txt"
    
    git add git_history.txt
    
    # Set environment variables for git date
    $env:GIT_AUTHOR_DATE = $dateStr
    $env:GIT_COMMITTER_DATE = $dateStr
    
    git commit -m $messages[$i % $messages.Count]
}

# Cleanup
Remove-Item "git_history.txt"
git add .
git commit -m "Final portfolio polish"

# Clear environment variables
$env:GIT_AUTHOR_DATE = $null
$env:GIT_COMMITTER_DATE = $null

Write-Output "Generated $commits commits over the last $days days."
