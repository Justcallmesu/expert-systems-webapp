import {
  ActionIcon,
  Badge,
  Card,
  Divider,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import FeatherIcon from "feather-icons-react";
import { Link } from "react-router-dom";
import useIllnessCardController from "./IllnessCardController";
import { IllnessCardProps } from "./interface/IllnessCard.interface";

function IllnessCard(props: IllnessCardProps) {
  const { illness } = props;

  const { IllnessMap } = useIllnessCardController();

  const foundIllness = IllnessMap[illness];

  return (
    <>
      {foundIllness ? (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group mt="md" mb="xs">
            <Title fw={500}>{illness}</Title>
            <Tooltip label="Informasi Lebih Mendetail Penyakit">
              <Link to={foundIllness.link} target="_blank">
                <ActionIcon size="xl" className="-scale-75">
                  <FeatherIcon icon="link" />
                </ActionIcon>
              </Link>
            </Tooltip>
          </Group>
          <Divider label="Deskripsi Penyakit" mb={"lg"} />
          <Stack>
            <Text size="sm" c="dimmed">
              {foundIllness.description}
            </Text>
          </Stack>
          <Divider label="Rekomendasi Perawatan" my={"lg"} />
          <Stack>
            <Text size="sm" c="dimmed">
              {foundIllness.solution}
            </Text>
          </Stack>
        </Card>
      ) : (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group mt="md" mb="xs">
            <Text fw={500}>Penyakit Tidak Ditemukan</Text>
            <Badge color="red">Tidak Ditemukan</Badge>
          </Group>
        </Card>
      )}
    </>
  );
}

export default IllnessCard;
