using System.Linq;

namespace Portfolio.Models;

public record CertificationDetail(string Title, string Link, string Instructor, string Website);

public record CertificationDto(CertificationDetail[] Exams, CertificationDetail[] Courses)
{
    public CertificationDetail[] details => Exams.Concat(Courses).ToArray();
}