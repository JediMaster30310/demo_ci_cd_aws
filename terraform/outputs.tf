output "ec2_public_ip" {
  value = aws_instance.web_github.public_ip
}
