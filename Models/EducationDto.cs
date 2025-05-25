namespace PortfolioV2.Models;

public record EducationDetail(string School, string Timeframe, string Title, string Category, string Score);

public record EducationDto(EducationDetail[] Schools);