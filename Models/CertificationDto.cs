using System.Linq;

namespace Portfolio.Models;

public enum Category
{
    Certification,
    Course
};

public record CertificationDetail(string Title, string Link, string Instructor, string Website)
{
    public Category Category => !string.IsNullOrWhiteSpace(Instructor) && !string.IsNullOrWhiteSpace(Website)
        ? Category.Course
        : Category.Certification;
}

public record CertificationDto(CertificationDetail[] Exams, CertificationDetail[] Courses)
{
    public CertificationDetail[] details => Exams.Concat(Courses).ToArray();
}