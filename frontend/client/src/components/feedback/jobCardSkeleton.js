import React from 'react';
import {
    Box,
    Skeleton,
    Image,
    Card,
    Grid,
    Stack,
} from '@chakra-ui/react';

function JobCardSkeleton() {
    return (<Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }} p={10} gap={10}>
        <Card
            p={4}
            pb={5}
            borderWidth={1}
            borderRadius="lg"
            borderColor="gray.300"
            boxShadow="md"
            width="300px"
            textAlign="center"
        >
            <Skeleton height="150px" borderRadius="lg" mb={2} />
            <Skeleton height="20px" width="80%" mx="auto" mb={2} />
            <Stack direction="row" spacing={2}>
                <Skeleton height="30px" width="50%" borderRadius="full" />
                <Skeleton height="30px" width="50%" borderRadius="full" />
            </Stack>
        </Card>
    </Grid>
    );
}

export default JobCardSkeleton;
