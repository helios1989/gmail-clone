using System;
using gmail_clone.Services;
using Xunit;

namespace gmail_cloneTest
{
    public class UnitTest1
    {
        [Theory]
        [InlineData(1, 2, 3)]
        [InlineData(4, 5, 9)]

        public void TestAddition(double a, double b, double expected)
        {
            //action
            BasicMath cal1 = new BasicMath();
            double actual = cal1.Addition(a, b);
            //assertion
            Assert.Equal(expected, actual);
        }
    }
}
