#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
int main()
{
    printf("你想好好学习吗？\n");
    char num = '0';
    printf("请输入（1/0）\n");
    scanf("%c\n",&num);
    if (num == '1')
    {
        printf("好娃娃\n");
    }
    else
    {
        printf("你不行\n");
    }
    return 0;
}