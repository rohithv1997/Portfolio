namespace Portfolio.Models;

public record ProjectDetail(string Title, string[] Text);

public record ProjectDto(ProjectDetail[] Projects);